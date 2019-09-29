$(document).ready(function ()
{ 

  var getUrlString = location.href;
  var url = new URL(getUrlString);
  id = url.searchParams.get('id');

  $.ajax({                                    
    url: 'https://database0926.herokuapp.com/api/test1/raw_sql_query/', 
    type: "GET",                                   
    dataType: 'json',   
    data:{"id":id},            
    success: function(Data)          
    {  

      var text = Data[0]["text"];
      var img = Data[0]["images"].split(",");
      var title = Data[0]["title"];
      text =text.replace(/,img,/g, '');
    text =text.replace('img,', '');
    text =text.replace('{', '');
    text =text.replace('}', '');
    text =text.replace(/▲/g, '');
    text =text.replace(/"/g, '');
    text =text.replace(/。，/g, '。');
    text =text.replace(/,/g, '');

    item = ''+'<h3>'+title+' <span></span></h3>'+
          '<p>'+text+'</p>';
    $('#text').append(item);

    for(i=1;i<=9;i++) {
        items = ''+'<div class="pets-image">'+
        '<img src= "'+img[i]+'"  alt="image">'+
            '<p ><br><br></p>'+
        '</div>';
        $('#text').append(items);
    }


      share = ''+'<li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fs06.tku.edu.tw%2F~406410190%2Fservice-details.html%3Fid%3D'+id+'%26name%3D&quote=" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src="images/social_flat_rounded_rects_svg/Facebook.svg" /></a></li>'+
            '<li><a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fs06.tku.edu.tw%2F~406410190%2Fservice-details.html%3Fid%3D'+id+'%26name%3D&text=:%20http%3A%2F%2Fs06.tku.edu.tw%2F~406410190%2Fservice-details.html%3Fid%3Dwt1234567%26name%3D" target="_blank" title="Tweet"><img alt="Tweet" src="images/social_flat_rounded_rects_svg/Twitter.svg" /></a></li>'+
            '<li><a href="https://plus.google.com/share?url=http%3A%2F%2Fs06.tku.edu.tw%2F~406410190%2Fservice-details.html%3Fid%3D'+id+'%26name%3D" target="_blank" title="Share on Google+"><img alt="Share on Google+" src="images/social_flat_rounded_rects_svg/Google+.svg" /></a></li>'+
            '<li><a href="mailto:?subject=&body=:%20http%3A%2F%2Fs06.tku.edu.tw%2F~406410190%2Fservice-details.html%3Fid%3D'+id+'%26name%3D" target="_blank" title="Send email"><img alt="Send email" src="images/social_flat_rounded_rects_svg/Email.svg" /></a></li>';
      $('#Share').append(share);
        
    }
    
  });
});
