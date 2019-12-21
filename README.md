<html>
<head>
<title>나를육성하자!</title>
<meta charset="utf-8">
</head>

<body>
<div id="grid">
<ol>
  <script>
  var index = ['사이트 소개','테크트리','잡다한 이야기','질문과 대답','관련 사이트'];
  var i=0;
  while(i < index.length){
    document.write('<li><a href="'+index[i]+'.html">'+index[i]+'</a></li>');
    i = i+1;
  }
  </script>
</ol>
<div id="interview">
<p>직업은 시대에 흐름에 따라 생겨나고 없어집니다.
  이 곳, <span style="font-weight : bold;">잡 스토리</span>에서 직업에 대해 잘 알면 시대의 흐름에 대해 잘 알 수 있습니다.</p>
</div>
</div>

<div id="disqus_thread"></div>
<script>
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://jobstory.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>



</body>
</html>
