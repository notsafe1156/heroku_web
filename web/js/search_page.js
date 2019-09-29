$(document).ready(function ()
{
  $.ajax({                                    
    url: 'https://database0926.herokuapp.com/api/test1/raw_sql_query/', 
    type: "GET",                                   
    dataType: 'json',               
    success: function(Data)          
    {  
     var NumOfData = Data.length; 
     var search = "首爾";
      for(i=0;i<=NumOfData;i++){
        var id = Data[i]["id"];   
        var title = Data[i]["title"];    
        var link = Data[i]["link"] ;
        var text = Data[i]["text"];

        if(text.indexOf(search) >= 0 | title.indexOf(search) >= 0 ){
            var img = Data[i]["images"].split(",");
        
            item = ''+'<div class="col-md-4 col-xs-6 our-pet-services-item-width">'+
            '<div class="our-pet-services-item">'+
              '<div class="our-pet-services-img">'+
                '<img src="'+img[1]+'" alt="image" height="300">'+
              '</div>'+
              '<div class="our-pet-services-text">'+
                '<h5><a onclick =href="service-details.html?id='+id+'&name=">'+title.substring(0,20)+'</a></h5>'+
                '<p>'+text.substring(0,30).slice(1)+'....</p>'+
              '</div>'+
            '</div>'+
            '</div>';
    
            $('#post').append(item);  
        }

       
      }   
    }
  });

});