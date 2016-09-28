$(document).ready(function(){
	var quotes = ["Insanity: doing the same thing over and over again and expecting different results.","Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.","Technology is anything that wasn’t around when you were born.","Any sufficiently advanced technology is equivalent to magic.","All of the biggest technological inventions created by man – the airplane, the automobile, the computer – says little about his intelligence, but speaks volumes about his laziness."," Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.","It has become appallingly obvious that our technology has exceeded our humanity.","Technology is a word that describes something that doesn’t work yet.","The art challenges the technology, and the technology inspires the art."];	
	var random = Math.floor((Math.random() * (quotes.length - 1)) + 1);

	var categoryNames = [],workshopNames = [];
	var uniqueCategoryNames;

	var jsonForSchedule,jsonForDescriptions,jsonForWorkshops;

	$.ajax({
		url : 'blah.php',		
		type : 'post',
		data : 'type=description',
		success : function(data) {
			jsonForDescriptions = JSON.parse(data);
		}
	});	

	$(".quote").addClass("animated fadeInRight").html(quotes[random]);

	$('.quote').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(".show-beginning").delay(2000).fadeOut().promise().done(function(){

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
		type : 'post',
		data : 'type=schedule',
		success : function(data) {
			jsonForSchedule = JSON.parse(data);
			var json = jsonForSchedule;
			$.each(json,function(k,v){
				$.each(v,function(key,value){
					
					categoryNames.push(value.catname);
					uniqueCategoryNames = categoryNames.filter(onlyUnique);
					
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

	}).done(function(){
		for(var count = 0;count < uniqueCategoryNames.length;count++)		
			$(".cat-names").append('<div class="cat-name col-md-12"><img src="images/logos/TT-' + uniqueCategoryNames[count].toLowerCase() + '.png" class="col-md-2"><div class="col-md-8 name">' + uniqueCategoryNames[count] + '</div><div class="col-md-2"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>');
	});

	$.ajax({
		url : 'blah.php',
		type : 'post',
		data : 'type=workshops',
		success : function(data) {
			jsonForWorkshops = JSON.parse(data);
			$.each(jsonForWorkshops,function(k,v){
				$.each(v,function(key,value){
					workshopNames.push(value.wname);
				});
			});
		}
	}).done(function(){
		console.log(workshopNames);
		for(var count = 0;count < workshopNames.length;count++)		
			$(".workshop-names").append('<div class="workshop-name col-md-12"><div class="col-md-10 name">' + workshopNames[count] + '</div><div class="col-md-2"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>');
	});
	

	$(document).on("click",".event",function(){
		var name = $(this).find('.event-name').text();
		
		search = JSON.search(jsonForDescriptions, '//data[ename = "' + name + '"]/edesc');
		$(".eventModalName").html(name);
		$(".eventModalDescription").html(search);
		$("#eventModal").toggle('modal');
	});

	$(document).on("click",".workshop-name",function(){
		var name = $(this).find('.name').text();
		$(".workshop-desc").find('.content').hide();
		var wdate = JSON.search(jsonForWorkshops, '//data[wname = "' + name + '"]/wdate');
		var wst = JSON.search(jsonForWorkshops, '//data[wname = "' + name + '"]/wst');
		var wet = JSON.search(jsonForWorkshops, '//data[wname = "' + name + '"]/wet');
		var wdesc = JSON.search(jsonForWorkshops, '//data[wname = "' + name + '"]/wdesc');
		var wvenue = JSON.search(jsonForWorkshops, '//data[wname = "' + name + '"]/wvenue');
		var wcat = JSON.search(jsonForWorkshops, '//data[wname = "' + name + '"]/wcat');


		$(".workshop-name-desc").text(name);	
		$(".wdate").html(wdate + " " + wst + " to " + wet);
		$(".wvenue").html(wvenue);
		$(".wcat").html(wcat);
		$(".workshop-desc").find(".vcenter").fadeIn();
		$(".workshopcontact").show();
		$(".workshopdesc").show();
		$(".desc").html(wdesc);
	});


	$(document).on("click",".cat-name",function(){

		var name = $(this).find('.name').text();
		$(".cat-desc").find('.content').hide();
		var allEvents = JSON.search(jsonForDescriptions, '//data[cname = "' + name + '"]/ename');

		$(".category-name").html(name);	

		$("#owl-example").empty();

		for(var i = 0;i < allEvents.length;i++)
		{
			$("#owl-example").append('<div class="category-events">' + allEvents[i] + '</div>');
		}
		$(".catheads").show();
		$(".catdesc").show();
		carouselIt();

	});

	$(document).on("click",".closeEventModal",function(){
		$("#eventModal").toggle('modal');
	})

	$(document).on('keydown',".searchInput",function(){

		var searchFor = $(this).data("search");
		var searchText = $(this).val();
		if($(this).val == "")
			$("." + searchFor).find('.event').show();
		$('.' + searchFor).find('.event').hide();
		$('.' + searchFor).find('.event:contains("' + searchText + '")').show();
	});

	var scrolled = 0;
	$(".schedule").on("mouseover" ,function(){
		scrolled = scrolled - 300;
		$(this).animate({
			scrollTop:  scrolled
		});
	});

	function onlyUnique(value, index, self) { 
		return self.indexOf(value) === index;
	}

	function carouselIt()
	{
		$("#owl-example").data('owlCarousel').reinit();
	}

});