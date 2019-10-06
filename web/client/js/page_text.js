$(document).ready(function ()
{ 

  var getUrlString = location.href;
  var url = new URL(getUrlString);
  id = url.searchParams.get('id');

  $.ajax({                                    
    url: 'https://djangotest1156.herokuapp.com/api/RSS/get_text/', 
    type: "GET",                                   
    dataType: 'json',   
    data:{"id":id},            
    success: function(Data)          
    {  

      var text = Data[0]["text"];
      var img = Data[0]["images"].replace('{', '');
      img = img.replace('}', '');
      img = img.split(',');

      var title = Data[0]["title"];
      //text =text.replace(/,img,/g, '');
      //text =text.replace('img,', '');
      text =text.replace('{', '');
      text =text.replace('}', '');
      text =text.replace(/▲/g, '');
      text =text.replace(/"/g, '');
      text =text.replace(/。，/g, '。');
      //text =text.replace(/,/g, '');
      text =text.split(",");

      text_len=text.length;

    item = ''+'<h3>'+title+' <span></span></h3>';

    num=0;//the number of the img

    for(i=0;i<text_len;i++){
      if(text[i].indexOf('img') >= 0){
        text[i]=text[i].replace('img','<img src= "'+img[num]+'"  alt="image">');
        num=num+1;
      }
      item = item + '<p>'+text[i]+'</p><br>';
    }

    $('#text').append(item);

    //share the post
    share = ''+'<li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fheroku-web1156.herokuapp.com%2Fservice-details.html%3Fid%3D'+id+'%26name%3D&quote=" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src="images/social_flat_rounded_rects_svg/Facebook.svg" /></a></li>'+
    '<li><a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fheroku-web1156.herokuapp.com%2Fservice-details.html%3Fid%3D'+id+'%26name%3D&text=:%20https%3A%2F%2Fheroku-web1156.herokuapp.com%2Fservice-details.html%3Fid%3D'+id+'%26name%3D" target="_blank" title="Tweet"><img alt="Tweet" src="images/social_flat_rounded_rects_svg/Twitter.svg" /></a></li>'+
    '<li><a href="mailto:?subject=&body=:%20https%3A%2F%2Fheroku-web1156.herokuapp.com%2Fservice-details.html%3Fid%3D'+id+'%26name%3D" target="_blank" title="Send email"><img alt="Send email" src="images/social_flat_rounded_rects_svg/Email.svg" /></a></li>';
    $('#Share').append(share);
        
    }
    
  });
});
