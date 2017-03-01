# jquery-carouse
this is a simple carouse


1.first import js/css file

		<link rel="stylesheet" href="css/styles.css" />
		<script src="js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/carousel.js" type="text/javascript" charset="utf-8"></script>
		
2.second  html

   		<div id="slideshow">
        <ul class="slides">
            <li><img src="img/banner1.jpg" /></li>
            <li><img src="img/meihua.png"/></li>
            <li><img src="img/gufeng.jpg" /></li>      
        </ul>
        <div class="previous-toggle toggle">
        <span class="arrow previous"></span>
        </div>
        <div class="next-toggle toggle">
        <span class="arrow next"></span>
        </div>
        
        <ul class="texts first list-unstyled texts-left">
            <li>十里桃花不如你</li>
            <li>春风化作相思雨</li>
        </ul>
        <ul class="texts list-unstyled texts-right">
            <li>泼墨山水</li>
            <li>自在乾坤</li>
        </ul>
        <ul class="texts list-unstyled texts-right">
             <li>偷走了青丝</li>
            <li>却留下一个你</li>
        </ul>
    </div>
3.third  
    write  $('#slideshow').carousel();  in your js file;
  
