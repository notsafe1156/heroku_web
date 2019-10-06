$(document).ready(function ()
{   
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    var page = url.searchParams.get('page');

    //第一次讀取
    if(page==null){
    $.ajax({                                    
    url: 'https://djangotest1156.herokuapp.com/api/RSS/get_text_for_page/', 
    type: "GET",                                   
    dataType: 'json',
    data:{"page":'1'},     

    //0:id  1:title  2:time  3:text 4:img

    success: function(result){
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
         $('#post').append(item);

        }
    }
  });
}//換頁
else{
  $.ajax({                                    
    url: 'https://djangotest1156.herokuapp.com/api/RSS/get_text_for_page/', 
    type: "GET",                                   
    dataType: 'json',
    data:{"page":page},     

    //0:id  1:title  2:time  3:text 4:img

    success: function(result){
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
         $('#post').append(item);

        }
    }
  });

}

  //category
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
  //page button
  $.ajax({                                    
    url: 'https://djangotest1156.herokuapp.com/api/RSS/get_text_for_page/', 
    type: "GET",                                   
    dataType: 'json',
    data:{"page":'1'},                
    success: function(result)          
    {  
      NumOfData = result[1][0]/12+1;
      if(page==null){
        $('#page').append('<span class="page-current">1</span>');
        for(i=2;i<=NumOfData;i++) {
          item = '' + '<a href="index.html?page='+i+'" onclick = "PageButton('+i+')">'+i+'</a>';
          $('#page').append(item);
          }
        }
      else{
      for(i=1;i<=NumOfData;i++) {
        if(i==page){
          $('#page').append('<span class="page-current">'+i+'</span>');
        }else{
        item = '' + '<a href="index.html?page='+i+'" onclick = "PageButton('+i+')">'+i+'</a>';
        $('#page').append(item);
        }
      }
    }
    }
  });
});
//search
function processFormData() {
  const nameElement = document.getElementById("name");
  const name = nameElement.value;
  if(name!=""){
  window.location.href='search_page.html?key='+name;
  }else{
    alert("請輸入想查詢的關鍵字!");
  }
}



