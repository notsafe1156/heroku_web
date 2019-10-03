$(document).ready(function ()
{
  $.ajax({                                    
    url: 'https://database0926.herokuapp.com/api/test1/raw_sql_query/', 
    type: "GET",                                   
    dataType: 'json',               
    success: function(Data)          
    {  
     var NumOfData = Data.length; 
      for(i=0;i<=NumOfData;i++){
        var id = Data[i]["id"];   
        var title = Data[i]["title"];    
        var text = Data[i]["text"];

        text =text.replace(/,img,/g, '');
        text =text.replace(/img/g, '');
        text =text.replace('{', '');
        text =text.replace('}', '');
        text =text.replace(/▲/g, '');
        text =text.replace(/"/g, '');
        text =text.replace(/。，/g, '。');
        text =text.replace(/,/g, '');

        var img = Data[i]["images"].replace('{', '');
        img =img.replace('}', '');
        img=img.split(',');

        item = ''+'<div class="col-md-4 col-xs-6 our-pet-services-item-width">'+
        '<div class="our-pet-services-item">'+
          '<div class="our-pet-services-img">'+
            '<img src="'+img[0]+'" alt="image" height="300" width = "400">'+
          '</div>'+
          '<div class="our-pet-services-text">'+
            '<h5><a href="service-details.html?id='+id+'&name=">'+title.substring(0,25)+'...</a></h5>'+
            '<p>'+text.substring(0,40)+'....</p>'+
          '</div>'+
        '</div>'+
        '</div>';

        $('#post').append(item);  
      }   
    }
  });

});

function processFormData() {
  const nameElement = document.getElementById("name");
  const name = nameElement.value;
  if(name!=""){
  window.location.href='search_page.html?key='+name;
  }else{
    alert("請輸入想查詢的關鍵字!");
  }
}

