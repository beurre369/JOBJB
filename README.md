<html>
  <head>
    <title>JOBJB</title>
  </head>
  
  <body>
    <div id="grid">
      <div id="interview">
        <p> 강의 리뷰 사이트입니다.</p>
      </div>
      <ol>
        <script>
          var index = ['Job-Story','Play','Lesson-Review'];
          var i=0;
          while(i < index.length){
            document.write('<li><a href="'+index[i]+'.html">'+index[i]+'</a></li>');
            i = i+1;
            }
         </script>
       </ol>
    </div>
  </body>
</html>
