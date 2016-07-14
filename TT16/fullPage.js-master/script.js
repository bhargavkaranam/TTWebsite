<<<<<<< HEAD
$(document).ready(function(){
	$(".closeBttn").click(function(){
 $(".sidenav").css("width","0");
});
	$(".openBttn").click(function(){
		$(".sidenav").css("width","300px");
		// $(".openBttn").css("transform","rotate(360deg)");
	});

=======
fullpage.initialize('#fullpage',{
	anchors: ['section1','section2','section3','section4','footer'],
	menu:'#menu',
	css3:true;
>>>>>>> f91c9e334fca5440b311c0857080612ecb9233d3
});