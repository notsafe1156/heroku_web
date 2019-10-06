$(document).ready(function ()
{ 
  var getUrlString = location.href;
  var url = new URL(getUrlString);
  var source = url.searchParams.get('source');
  var page = url.searchParams.get('page');

  //換頁button
  $.ajax({                                    
    url: 'https://djangotest1156.herokuapp.com/api/RSS/get_text_for_page/', 
    type: "GET",                                   
    dataType: 'json',
    data:{"page":page,
          "source":source
          },     

    //0:id  1:title  2:time  3:text 4:img

    success: function(result){
        NumOfData = result[1][0]/12+1;
        for(i=1;i<=NumOfData;i++) {
          if(i==page){
            $('#page').append('<span class="page-current">'+i+'</span>');
          }else{
          item = '' + '<a href="category_page.html?source='+source+'&page='+i+'" class="tran3s">'+i+'</a>';
          $('#page').append(item);
          }
        }
        
    }
  });

  //換頁顯示
  $.ajax({                                    
    url: 'https://djangotest1156.herokuapp.com/api/RSS/get_text_for_page/', 
    type: "GET",                                   
    dataType: 'json',
    data:{"page":page,
          "source":source
          },     

    //0:id  1:title  2:time  3:text 4:img

    success: function(result){
      $('#title').append('<h2>'+source+'</h2>');
      for(i=0 ;i<12;i++) {
         id = result[0][i][0];
         title = result[0][i][1];
         text = result[0][i][3];

         text = text.replace(/,img,/g, '');
         text = text.replace(/img/g, '');
         text = text.replace('{', '');
         text = text.replace('}', '');
         text = text.replace(/▲/g, '');
         text = text.replace(/"/g, '');
         text = text.replace(/。，/g, '。');
         text = text.replace(/,/g, '');

         img = result[0][i][4].replace('{', '');
         img = img.replace('}', '');
         img = img.split(',');

         item = '' + '<div class="col-md-4 col-xs-6 our--item-width">' +
             '<div class="our--item">' +
             '<div class="our--img">' +
             '<img src="' + img[0] + '" alt="image" height="300" width = "400">' +
             '</div>' +
             '<div class="our--text">' +
             '<h5><a href="service-details.html?id=' + id + '&name=">' + title.substring(0, 25) + '...</a></h5>' +
             '<p>' + text.substring(0, 40) + '....</p>' +
             '</div>' +
             '</div>' +
             '</div>';
         $('#cate').append(item);
        }
        
    }
  });

  //category dropdown
  $.ajax({                                    
    url: 'https://djangotest1156.herokuapp.com/api/RSS/get_source/', 
    type: "GET",                                   
    dataType: 'json',               
    success: function(Data)          
    {  
      NumOfData = Data.length;
      for(i=0;i<NumOfData;i++) {
        category = Data[i];

        item = '' + '<li><a href="category_page.html?source='+category+'&page=1" class="tran3s">'+category+'</a></li>';
        $('#category').append(item);

      }
    }
  });
  

});