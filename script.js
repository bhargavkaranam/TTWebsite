$(document).ready(function(){
	var quotes = ["Insanity: doing the same thing over and over again and expecting different results.","Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.","Technology is anything that wasn’t around when you were born.","Any sufficiently advanced technology is equivalent to magic.","All of the biggest technological inventions created by man – the airplane, the automobile, the computer – says little about his intelligence, but speaks volumes about his laziness."," Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.","It has become appallingly obvious that our technology has exceeded our humanity.","Technology is a word that describes something that doesn’t work yet.","The art challenges the technology, and the technology inspires the art."];	
	var random = Math.floor((Math.random() * (quotes.length - 1)) + 1);

	$(".quote").addClass("animated fadeInRight").html(quotes[random]);

	$('.quote').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(".show-beginning").delay(800).fadeOut().promise().done(function(){
			$("#fullpage").fadeIn(600);
		});
	});

	$(".sidenav").find('ul').hide();
	$(".closeBttn").click(function(){
		$(".sidenav").css("width","0");
	});
	
	$(".openBttn").click(function(){
		$(".sidenav").animate({"width":"350px"},200).find('ul').fadeIn();

		// $(".openBttn").css("transform","rotate(360deg)");
	});
	$(document).on('click','#updates',function() {
		$("#updates").addClass('close');
		$(".updates_div").animate({'position' : 'absolute','right' : '0px'},800);
		$(".overlay").css('height','100vh');

	});
	$(document).on('click','.close',function(){
		$("#updates").removeClass('close');
		$(".updates_div").animate({'position' : 'absolute','right' : '-300px'},800);
	})

	$.ajax({
		url : 'blah.php',		
		success : function(data) {
			var json = JSON.parse(data);
			$.each(json,function(k,v){
				$.each(v,function(key,value){
					
					if(value.day == "1")
					{
						
						$(".schedule-body-one").append('<div class="event"><div style="background: #E84141;" class="event-time">' + value.etime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
					else if(value.day == "2")
					{
						
						$(".schedule-body-two").append('<div class="event"><div style="background: #1D1919;" class="event-time">' + value.etime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
					else if(value.day == "3")
					{
						
						$(".schedule-body-three").append('<div class="event"><div style="background: #3B8CDD;" class="event-time">' + value.etime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
					else if(value.day == "4")
					{
						
						$(".schedule-body-four").append('<div class="event"><div style="background:#4AD5BF" class="event-time">' + value.etime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
				});
			});
		}

	});
	var scrolled = 0;
	$(".schedule").on("mouseover" ,function(){
		scrolled = scrolled - 300;
		$(this).animate({
			scrollTop:  scrolled
		});
	});
});