fullpage.initialize('#fullpage',{
	anchors: ['section1','section2','section3','section4','footer'],
	menu:'#menu',
	css3:true;
});

$(document).ready(function() {

 	TweenMax.to($('h4') ,5 ,{font-size: 50});
	$(".closeBttn").click(function(){
 $(".sidenav").css("width","0");
});
	$(".openBttn").click(function(){
		$(".sidenav").css("width","300px");
		// $(".openBttn").css("transform","rotate(360deg)");
	});

});
