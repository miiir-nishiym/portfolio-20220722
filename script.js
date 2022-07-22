$(function(){

   $('a[href^="#"]').click(function() {

      // 初期設定：移動時間(ms)と頭出し位置
      var speed = 500;
      var offset = -0;

      // アンカーを取得
      var anchor = $(this).attr("href");

      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top + offset;

      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });

});*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}

#wrap{
	width: 84%;
	max-width: 1280px;
	min-width: 512px;
	margin: 0 auto;
}

header {
	position:relative;
	height: 8rem;
	background: #333;
}

header h1{
	position: absolute;
	top: 3rem;
	left: 3rem;
	font-size: 2rem;
	color: #FFF;
}

#buttonSet1 {
	position: absolute;
	top: 2rem;
	right:3rem;
}
#buttonSet2 {
	position: absolute;
	top: 4rem;
	right:3rem;
}

nav {
	padding: 1rem 3rem ;
	background: #333;
}

nav ul{
	display: flex;
	flex-direction: row;
}

nav ul li{
	margin-right: 2rem;
}

nav ul li a {
	color: white;
}

main{
	display: flex;
	flex-direction: row;
}

body{
	background-color: gray; 
}

section{
	flex: 3;
	padding: 3rem;
	background: #EEE;
}

article{
	min-height: 8rem;
	padding: 1rem;
	margin-bottom: 2rem;
	background: #FFF;
}

aside{
	flex: 1;
	padding: 3rem;
	background: #DDD;
}

footer {
	padding: 2rem 3rem;
	text-align: center;
	background: #333;
	color: #FFF;
}

.box {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

