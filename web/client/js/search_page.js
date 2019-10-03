$(document).ready(function ()
{ 
  var getUrlString = location.href;
  var url = new URL(getUrlString);
  key = url.searchParams.get('key');

  $.ajax({                                    
    url: 'https://database0926.herokuapp.com/api/test1/raw_sql_query/', 
    type: "GET",                                   
    dataType: 'json',               
    success: function(Data)          
    {  
     var NumOfData = Data.length;//資料庫總筆數
     var search = key;
     search=search.split(" ");
     var time=search.length;//關鍵字個數
     var non=0;

      //第t個關鍵字
     for(t=0;t<time;t++){
       //遍歷整個資料庫
      for(i=0;i<NumOfData;i++){
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


        if(text.indexOf(search[t]) >= 0 | title.indexOf(search[t]) >= 0 ){
          var img = Data[i]["images"].replace('{', '');
          img =img.replace('}', '');
          img=img.split(',');
        
            item = ''+'<div class="col-md-4 col-xs-6 our-pet-services-item-width">'+
            '<div class="our-pet-services-item">'+
              '<div class="our-pet-services-img">'+
                '<img src="'+img[0]+'" alt="image" height="300">'+
              '</div>'+
              '<div class="our-pet-services-text">'+
                '<h5><a href="service-details.html?id='+id+'&name=">'+title.substring(0,25)+'...</a></h5>'+
                '<p>'+text.substring(0,40)+'....</p>'+
              '</div>'+
            '</div>'+
            '</div>';
            

            $('#post').append(item); 
            delete Data[i];
            non=1; 
          }     
        } 
      }
      if(non==0){
        alert("無此相關文章");
      }  
    }
  });

});