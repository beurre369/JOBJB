function fetchMovie(name){
        fetch(name).then(function(response){
          response.text().then(function(text){
            document.querySelector('article.column.middle').innerHTML = text;
             })
          });
        }
      if(location.hash){
       fetchMovie(location.hash.substr(2));
      }else{
        fetchMovie('welcome');
      }
      fetch('movieList').then(function(response){
          response.text().then(function(text){
            console.log(text);
            var items = text.split(',');
            var i =0;
            var tags = '';
            while(i<items.length){
              var item = items[i];
              item = item.trim();
              var tag = '<li><a href="#!'+item+'" onclick="fetchMovie(\''+item+'\')">'+item+'</a></li>';
              console.log(item);
              tags = tags + tag;
              i = i+1;
            }
            document.querySelector('#reviewnav').innerHTML = tags;
             })
          });
