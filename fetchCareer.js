function fetchCareer(name){
        fetch(name).then(function(response){
          response.text().then(function(text){
            document.querySelector('article.column.middle').innerHTML = text;
             })
          });
        }
      if(location.hash){
       fetchCareer(location.hash.substr(2));
      }else{
        fetchCareer('welcome');
      }
      fetch('careerList').then(function(response){
          response.text().then(function(text){
            console.log(text);
            var items = text.split(',');
            var i =0;
            var tags = '';
            while(i<items.length){
              var item = items[i];
              item = item.trim();
              var tag = '<li><a href="#!'+item+'" onclick="fetchCareer(\''+item+'\')">'+item+'</a></li>';
              console.log(item);
              tags = tags + tag;
              i = i+1;
            }
            document.querySelector('#reviewnav').innerHTML = tags;
             })
          });
