$(document).ready(function(){
	$(".closeBttn").click(function(){
 $(".sidenav").css({"visibility":"hidden","opacity":"0"});
});
	$(".openBttn").click(function(){
		$(".sidenav").css({"visibility": "visible","opacity":"1"});
	});

});