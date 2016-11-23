
$(window).load(function(){
	var quotes = ["Insanity: doing the same thing over and over again and expecting different results.","Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.","Technology is anything that wasn’t around when you were born.","Any sufficiently advanced technology is equivalent to magic.","All of the biggest technological inventions created by man – the airplane, the automobile, the computer – says little about his intelligence, but speaks volumes about his laziness."," Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.","Technology is best when it brings people together.","People who are crazy enough to think they can change the world are the ones who do","Technology is a word that describes something that doesn’t work yet.","The art challenges the technology, and the technology inspires the art."];	
	var random = Math.floor((Math.random() * (quotes.length - 1)) + 1);
	$(".quote").addClass("animated fadeInRight").html(quotes[random]);

	$('.quote').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(".show-beginning").delay(1200).fadeOut('slow',function(){

			$("#fullpage").fadeIn();
		});
	});





	var categoryNames = [],workshopNames = [];
	var uniqueCategoryNames;
	var jsonForCategoryHeads = {
		"Sheet1": [
		{
			"Sl No.": "1",
			"CATEGORY": "ACUMEN ",
			"Name": "Angad Ahuja",
			"Club Name": "ISTE",
			"Position": "Category Head",

			"cno.": "7022207520",
			"Email ID": "angadahuja2008@gmail.com",

		},
		{
			"CATEGORY": "ACUMEN",
			"Name": "Palak Tyagi",
			"Club Name": "ISTE",
			"Position": "Coordinator ",

			"cno.": "7259584530",
			"Email ID": "palak8454@gmail.com",

		},
		{
			"Sl No.": "2",
			"CATEGORY": "AIRBORNE",
			"Name": "Arpit Sharma",
			"Club Name": "IE AEROSPACE",
			"Position": "Category Head",

			"cno.": "9986017111",
			"Email ID": "arpitsharma1710@gmail.com",

		},
		{
			"CATEGORY": "AIRBORNE",
			"Name": "Shreyas Jain",
			"Club Name": "IE AEROSPACE",
			"Position": "Coordinator",

			"cno.": "7022251848",
			"Email ID": "shreyas.jain6416@gmail.com",

		},
		{
			"Sl No.": "3",
			"CATEGORY": "ALACRITY",
			"Name": "Sagi Aditya Raju",
			"Club Name": "IE E&C",
			"Position": "Category Head",

			"cno.": "9663593376",
			"Email ID": "rajuaditya2@gmail.com",

		},
		{
			"CATEGORY": "ALACRITY",
			"Name": "R Ashwin",
			"Club Name": "IE E&C",
			"Position": "Coordinator",

			"cno.": "9873972846",
			"Email ID": "ashwinmit2014@gmail.com",

		},
		{
			"Sl No.": "4",
			"CATEGORY": "BIZMASTERRO",
			"Name": "Sushrut Tathavadkar",
			"Club Name": "MUTBI",
			"Position": "Category Head",

			"cno.": "9964355911",
			"Email ID": "sushrut.t@gmail.com",

		},
		{
			"CATEGORY": "BIZMASTERRO",
			"Name": "Sabahat Shaikh",
			"Club Name": "MUTBI",
			"Position": "Coordinator",

			"cno.": "9663597099",
			"Email ID": "sabahatshaikh97@gmail.com",

		},
		{
			"Name": "Ashutosh M. Ahuja",
			"CATEGORY" : "BIZMASTERRO",
			"Club Name": "MUTBI",
			"Position": "Coordinator",

			"cno.": "9591328525",
			"Email ID": "ashutoshmahuja@gmail.com",

		},
		{
			"Sl No.": "5",
			"CATEGORY": "CONSTRUCTURE",
			"Name": "Simar Nagpal",
			"Club Name": "IE CIVIL",
			"Position": "Category Head",

			"cno.": "9901339473",
			"Email ID": "simar1996nagpal@gmail.com",

		},
		{
			"CATEGORY": "CONSTRUCTURE",
			"Name": "Sarvpreet Singh Tuteja",
			"Club Name": "IE CIVIL",
			"Position": "Coordinator",

			"cno.": "9663599102",
			"Email ID": "sarvpreetsinghtuteja@gmail.com",

		},
		{
			"Sl No.": "6",
			"CATEGORY": "CRYPTOSS",
			"Name": "Anshuman Awasthi",
			"Club Name": "IE CSE",
			"Position": "Category Head",

			"cno.": "7022251866",
			"Email ID": "anshuman@iecse.xyz",

		},
		{
			"CATEGORY": "CRYPTOSS",
			"Name": "Saket Singh",
			"Club Name": "IE CSE",
			"Position": "Coordinator",

			"cno.": "8553934442",
			"Email ID": "sakettsingh@outlook.com",

		},
		{
			"Sl No.": "7",
			"CATEGORY": "CHEMINOVA",
			"Name": "Kartikeya Rastogi",
			"Club Name": "IE CHEMICAL",
			"Position": "Category Head",

			"cno.": "7022251808",
			"Email ID": "kartikeya.rastogi@hotmail.com",

		},
		{
			"CATEGORY": "CHEMINOVA",
			"Name": "Sohan Ahmed",
			"Club Name": "IE CHEMICAL",
			"Position": "Coordinator",

			"cno.": "9901346902",
			"Email ID": "sohan.ahmedmit@gmail.com",

		},
		{
			"Sl No.": "8",
			"CATEGORY": "ELECTRIFIC",
			"Name": "Shreyash Sinha",
			"Club Name": "IE E&E",
			"Position": "Category Head",

			"cno.": "9663593526",
			"Email ID": "shreyash2605@gmail.com",

		},
		{
			"CATEGORY": "ELECTRIFIC",
			"Name": "Sunanda ",
			"Club Name": "IE E&E",
			"Position": "Coordinator",
			"Registration No.": "140906312",
			"cno.": "9441426978",
			"Email ID": "sunanda_2509@yahoo.co.uk",
			"CGPA": "8.1"
		},
		{
			"Sl No.": "9",
			"CATEGORY": "ENERGIA",
			"Name": "Rishabh Mukund",
			"Club Name": "AUC",
			"Position": "Category Head",

			"cno.": "7829090580",
			"Email ID": "rishabh.m96@gmail.com",

		},
		{
			"CATEGORY": "ENERGIA",
			"Name": "Rikshita M Tiwary",
			"Club Name": "AUC",
			"Position": "Coordinator",

			"cno.": "9740047694",
			"Email ID": "rikshita.tiwary@gmail.com",

		},
		{
			"Sl No.": "10",
			"CATEGORY": "EPSILON",
			"Name": "Neel Anand Bedarkar",
			"Club Name": "BMESI",
			"Position": "Category Head",

			"cno.": "7022251822",
			"Email ID": "neelanandbedarkar@gmail.com",

		},
		{
			"CATEGORY": "EPSILON",
			"Name": "Amala Ananthakrishnan",
			"Club Name": "BMESI",
			"Position": "Coordinator",

			"cno.": "9632180255",
			"Email ID": "amala2151@gmail.com",

		},
		{
			"Sl No.": "11",
			"CATEGORY": "KRAFTWAGEN",
			"Name": "Nakul Chodha",
			"Club Name": "SAE",
			"Position": "Category Head",

			"cno.": "9901312398",
			"Email ID": "nakul.chodha@gmail.com",

		},
		{
			"CATEGORY": "KRAFTWAGEN",
			"Name": "Samarth Mehrotra",
			"Club Name": "SAE",
			"Position": "Coordinator",

			"cno.": "8050655420",
			"Email ID": "smart.samarth25@gmail.com",

		},
		{
			"Sl No.": "12",
			"CATEGORY": "MECHANIZE",
			"Name": "Animesh Dhagat",
			"Club Name": "IE MECHANICAL",
			"Position": "Category Head",

			"cno.": "9035440628",
			"Email ID": "animeshd19@hotmail.com",

		},
		{
			"CATEGORY": "MECHANIZE",
			"Name": "Mohit Relhan",
			"Club Name": "IE MECHANICAL",
			"Position": "Coordinator",

			"cno.": "8884918285",
			"Email ID": "mohit9601@gmail.com",

		},
		{
			"Name": "Subrahmanyam",
			"CATEGORY" : "MECHANIZE",
			"Club Name": "ASME",
			"Position": "Coordinator",

			"cno.": "8123198126",
			"Email ID": "vungaralasubbu@gmail.com",

		},
		{
			"Sl No.": "13",
			"CATEGORY": "MECHTRON",
			"Name": "Pallavi Shintre ",
			"Club Name": "IE MECHATRONICS",
			"Position": "Category Head",

			"cno.": "9742704000",
			"Email ID": "pshintre96@gmail.com",

		},
		{
			"CATEGORY": "MECHTRON",
			"Name": "Shweatlana Mahapatra ",
			"Club Name": "IE MECHATRONICS",
			"Position": "Coordinator",

			"cno.": "8277311180",
			"Email ID": "shweatlana96@gmail.com",

		},
		{
			"Name": "Yajnaseni Saha",
			"Club Name": "ISOI",
			"CATEGORY": "MECHTRON",
			"Position": "Coordinator",

			"cno.": "8095528222",
			"Email ID": "sahayajnaseni96@gmail.com",

		},
		{
			"Sl No.": "14",
			"CATEGORY": "ROBOTREK",
			"Name": "Pushkar Dhabe",
			"Club Name": "IEEE",
			"Position": "Category Head",

			"cno.": "9663595447",
			"Email ID": "pushkardhabe.23@gmail.com",

		},
		{
			"Name": "Sajal Khandelwal",
			"Club Name": "IEEE",
			"CATEGORY" : "ROBOTREK",
			"Position": "Coordinator",

			"cno.": "8123646392",
			"Email ID": "sajaliffco@gmail.com",

		},
		{
			"Name": "Pratyush Sinha",
			"Club Name": "IEEE",
			"CATEGORY" : "ROBOTREK",
			"Position": "Coordinator",

			"cno.": "8095507000",
			"Email ID": "pratyush.singh8@gmail.com",

		},
		{
			"Sl No.": "15",
			"CATEGORY": "TURING",
			"Name": "Chinmay Nivsarkar",
			"Club Name": "LUG",
			"Position": "Category Head",

			"cno.": "8123653584",
			"Email ID": "chinmayn96@yahoo.co.in",

		},
		{
			"CATEGORY": "TURING",
			"Name": "Avikant Saini",
			"Club Name": "LUG",
			"Position": "Coordinator",

			"cno.": "7760912412",
			"Email ID": "avikantsainidbz@gmail.com",

		},
		{
			"Sl No.": "16",
			"CATEGORY": "CHRYSALIS",
			"Name": "Prerna Jain",
			"Club Name": "IE BIOTECHNOLOGY",
			"Position": "Category Head",

			"cno.": "9591301153",
			"Email ID": "08.prerna@gmail.com",
			"CGPA": "9.73"
		},
		{
			"CATEGORY": "CHRYSALIS",
			"Name": "Mridushi Daga",
			"Club Name": "IE BIOTECHNOLOGY",
			"Position": "Coordinator",
			"Registration No.": "140924024",
			"cno.": "9901393134",
			"Email ID": "mridushi.daga@gmail.com",

		},
		{
			"Sl No.": "17",
			"CATEGORY": "COSMICON",
			"Name": "Kriti R Agarwal ",
			"Club Name": "ASTRONOMY CLUB",
			"Position": "Category Head",

			"cno.": "8095127000",
			"Email ID": "kritiragarwal1@gmail.com",

		},
		{
			"CATEGORY": "COSMICON",
			"Name": "Ved Dubhashi",
			"Club Name": "ASTRONOMY CLUB",
			"Position": "Coordinator",

			"cno.": "9743909669",
			"Email ID": "ved.dubhashy@gmail.com",

		},
		{
			"Sl No.": "18",
			"CATEGORY": "VEDANTH",
			"Name": "K Akanksh Pratheek Reddy",
			"Club Name": "R&C",
			"Position": "Category Head",

			"cno.": "9591311076",
			"Email ID": "akanksh.pratheek@gmail.com",

		},
		{
			"CATEGORY": "VEDANTH",
			"Name": "Palash Thakur",
			"Club Name": "R&C",
			"Position": "Coordinator",

			"cno.": "9886347355",
			"Email ID": "palashthakur1@gmail.com",

		},
		{
			"Name": "Anubhav Apurva",
			"Club Name": "R&C",
			"CATEGORY" : "VEDANTH",
			"Position": "Coordinator",

			"cno.": "9663602784",
			"Email ID": "anubhavh3@gmail.com",

		},
		{
			"Sl No.": "19",
			"CATEGORY": "ROBOWARS",
			"Name": "Kavesh Pandit",
			"Club Name": "ROBOMANIPAL",
			"Position": "Category Head",

			"cno.": "9901327943",
			"Email ID": "kaveshpandit03@gmail.com",

		},
		{
			"Name": "Arjun Manoj Menon",
			"Club Name": "ROBOMANIPAL",
			"Position": "Coordinator",
			"CATEGORY" : "ROBOWARS",

			"cno.": "7022207454",
			"Email ID": "arjunmmenon@gmail.com",

		},
		{
			"Sl No.": "20",
			"CATEGORY": "FUEL RC",
			"Name": "Mir Aman Ali",
			"Club Name": "N/A",
			"Position": "Category Head",

			"cno.": "7795144166",
			"Email ID": "miramanali.4@gmail.com"
		},
		{
			"Name": "Anirudha Haritsa",
			"Club Name": "N/A",
			"CATEGORY" : "FUEL RC",
			"Position": "Category Head",

			"cno.": "9535676255",
			"Email ID": "anirudhaharitsaa@gmail.com"
		},
		{
			"Name": "Aasthik Pandian",
			"Club Name": "N/A",
			"CATEGORY" : "FUEL RC",
			"Position": "Coordinator",

			"cno.": "9035156975",
			"Email ID": "aasthikpandian@gmail.com"
		},
		{
			"Name": "Allen Joshey",
			"Club Name": "N/A",
			"Position": "Coordinator",
			"CATEGORY" : "FUEL RC",

			"cno.": "9740945754",
			"Email ID": "allenjoshey1995@gmail.com"
		},
		{
			"Name": "Csaradhi",
			"Club Name": "N/A",
			"Position": "Coordinator",
			"CATEGORY" : "FUEL RC",

			"cno.": "7022252146",
			"Email ID": "saicsaradhi@gmail.com"
		},
		{
			"Name": "Pratik Khetan",
			"Club Name": "N/A",
			"Position": "Coordinator",
			"CATEGORY" : "FUEL RC",

			"cno.": "9663602906",
			"Email ID": "Khetan.pratik1@gmail.com"
		},
		{
			"Name": "Akshat Rajkumar Mathur",
			"Club Name": "N/A",
			"Position": "Coordinator",
			"CATEGORY" : "FUEL RC",

			"cno.": "9426717184",
			"Email ID": "akshat.mathur211@gmail.com"
		},
		{
			"Sl No.": "21",
			"Name": "Kedar Cholkar",
			"Club Name": "N/A",
			"CATEGORY" : "FUEL RC",
			"Position": "Category Head",

			"cno.": "9036163130",
			"Email ID": "kedar.cholkar@gmail.com",

		},
		{
			"CATEGORY": "PAPER PRESENTATION",
			"Name": "Shashank Jain",
			"Club Name": "N/A",
			"Position": "Coordinator",

			"cno.": "9985414444",
			"Email ID": "shashank.ostwal48@gmail.com",

		},
		{
			"Name": "Kirti Verma",
			"CATEGORY" : "PAPER PRESENTATION",
			"Club Name": "N/A",
			"Position": "Coordinator",

			"cno.": "9901311912",
			"Email ID": "kirti.verma96@gmail.com",

		}
		]
	};
	var jsonForSchedule,jsonForDescriptions,jsonForWorkshops,jsonForCategories;




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
			$(".lp-image").on('load',function(){
				$("#fullpage").fadeIn(600);
			});
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

						$(".schedule-body-one").append('<div class="event"><div style="background: #E84141;" class="event-time">' + value.stime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
					else if(value.day == "2")
					{

						$(".schedule-body-two").append('<div class="event"><div style="background: #1D1919;" class="event-time">' + value.stime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
					else if(value.day == "3")
					{

						$(".schedule-body-three").append('<div class="event"><div style="background: #3B8CDD;" class="event-time">' + value.stime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
					else if(value.day == "4")
					{

						$(".schedule-body-four").append('<div class="event"><div style="background:#4AD5BF" class="event-time">' + value.stime + '</div><div class="event-details"><div class="event-name">' + value.ename + '</div><div class="event-venue">' + value.venue + '</div></div>');
					}
				});
			});
		}

	}).done(function(){
		$.ajax({
			url : 'blah.php',
			type : 'post',
			data : 'type=categories',
			success : function(data)
			{
				jsonForCategories = JSON.parse(data);
				$.each(jsonForCategories,function(k,v){
					$.each(v,function(key,value){
						if(value.cname == "The Manipal Conclave" || value.cname == "Fuel RC 5" || value.cname == "Questionable Intelligence" || value.cname == "Robowars" || value.cname == "Featured Event-Paper Presentation")
							return true;
						if(value.cname == "Featured Event")
							value.cname = "Featured Events";
						$(".cat-names").append('<div class="cat-name col-md-12"><img src="images/logos/TT-' + value.cname.toLowerCase() + '.png" class="col-md-2"><div class="col-md-8 name">' + value.cname + '</div><div class="col-md-2"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>');
					});
				});
				$(".cat-names").append('<div class="cat-name col-md-12"><img src="images/logos/TT-FeaturedEvents.png" class="col-md-2"><div class="col-md-8 name">Featured Events</div><div class="col-md-2"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>')
				$(".cat-name img").on("error",function(){
					$(this).attr('src','images/logo.png');
				});
				
			}
		});

	});

	$.ajax({
		url : 'blah.php',
		type : 'post',
		data : 'type=workshops',
		success : function(data) {
			jsonForWorkshops = JSON.parse(data);
			$.each(jsonForWorkshops,function(k,v){
				$.each(v,function(key,value){
					if(value.wdate.indexOf("30th") !== -1)
						$(".pretechtatva-schedule-body-one").append('<div data-open="workshop" class="event"><div style="background: #E84141;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue"></div></div>');
					if(value.wdate.indexOf("1st") !== -1)
						$(".pretechtatva-schedule-body-two").append('<div data-open="workshop" class="event"><div style="background: #1D1919;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("2nd") !== -1)
						$(".pretechtatva-schedule-body-three").append('<div data-open="workshop" class="event"><div style="background: #3B8CDD;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("3rd") !== -1)
						$(".pretechtatva-schedule-body-four").append('<div data-open="workshop" class="event"><div style="background: #4AD5BF;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("4th") !== -1)
						$(".pretechtatva-schedule-body-five").append('<div data-open="workshop" class="event"><div style="background: #3B8CDD;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("5th") !== -1)
						$(".pretechtatva-schedule-body-six").append('<div data-open="workshop" class="event"><div style="background: #E84141;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("6th") !== -1)
						$(".pretechtatva-schedule-body-seven").append('<div data-open="workshop" class="event"><div style="background: #1D1919;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("7th") !== -1)
						$(".pretechtatva-schedule-body-eight").append('<div data-open="workshop" class="event"><div style="background: #3B8CDD;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("8th") !== -1)
						$(".pretechtatva-schedule-body-nine").append('<div data-open="workshop" class="event"><div style="background: #4AD5BF;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wdate.indexOf("9th") !== -1)
						$(".pretechtatva-schedule-body-ten").append('<div data-open="workshop" class="event"><div style="background: #3B8CDD;" class="event-time">' + value.wst + '</div><div class="event-details"><div class="event-name">' + value.wname + '</div><div class="event-venue">' + value.wvenue + '</div></div>');
					if(value.wtype == "internal")
					{

						$(".workshop-names").append('<div class="workshop-name col-md-12"><div class="col-md-10 name">' + value.wname + '</div><div class="col-md-2"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>');
					}
					else
						$(".workshop-names-external").append('<div data-type="external" class="workshop-name col-md-12"><div class="col-md-2"><i class="fa fa-chevron-left" aria-hidden="true"></i></div><div class="col-md-10 name">' + value.wname + '</div></div>');					
				});
});
}
}).done(function(){

	

});




$(document).on("click",".event",function(){
	var name = $(this).find('.event-name').text();
	if($(this).data("open") == "workshop")
		return false;
	searchDescription = JSON.search(jsonForDescriptions, '//data[ename = "' + name + '"]/edesc');

	$(".eventModalName").html(name);

	$(".eventModalDescription").html(searchDescription);

	$("#eventModal").toggle('modal');
});

$(document).on("click",".category-events",function(){
	var name = $(this).text();
	searchDescription = JSON.search(jsonForDescriptions, '//data[ename = "' + name + '"]/edesc');
	searchDay = JSON.search(jsonForSchedule, '//data[ename = "' + name + '"]/day');
	searchVenue = JSON.search(jsonForSchedule, '//data[ename = "' + name + '"]/venue');
	searchStartTime = JSON.search(jsonForSchedule, '//data[ename = "' + name + '"]/stime');
	searchEndTime = JSON.search(jsonForSchedule, '//data[ename = "' + name + '"]/etime');

	$(".eventModalName").html(name);
	$(".eventModalDescription").html(searchDescription);
	$(".eventModalDescription").append('<table class="table table-striped eventModalBlah"><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead></table>');
	for(var i = 0;i < searchDay.length;i++)
		$(".eventModalBlah").append('<tr><td><i class="fa fa-calendar-o" aria-hidden="true"></i>' + searchDay[i] + '</td><td><i class="fa fa-building" aria-hidden="true"></i>' + searchVenue[i] + '</td><td><i class="fa fa-clock-o" aria-hidden="true"></i>' + searchStartTime[i] + " to  " + searchEndTime[i]);

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

	var categoryHeadsNames = JSON.search(jsonForCategoryHeads,'//Sheet1[CATEGORY = "' + wcat[0].toUpperCase() + '"]/Name');
	var categoryHeadsContact = JSON.search(jsonForCategoryHeads,'//Sheet1[CATEGORY = "' + wcat[0].toUpperCase() + '"]/cno.');

	$("#workshopcontact").empty();
	for(var i = 0;i < categoryHeadsNames.length;i++)
		$("#workshopcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">' + categoryHeadsNames[i] + '</span><br><span class="chip-number">' + categoryHeadsContact[i] + '</span></div>');

	$(".workshop-name-desc").text(name);	

	
	
	$(".wdate").html(wdate + " " + wst + " to " + wet);
	$(".wvenue").html(wvenue);
	$(".wcat").html(wcat);
	$(".workshop-desc").find(".vcenter").fadeIn();
	$(".workshopcontact").show();
	$(".workshopdesc").show();
	if($(this).data("type") == "external")
	{
		$("#workshopcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">Suvarna Varma</span><br><span class="chip-number">9663601255</span></div>');
	}
	if(name === "IOT")
		$(".desc").html(wdesc + "<br><a target='_blank' class='btn btn-success' href='https://www.payumoney.com/events/#/buyTickets/IoT-Workshop-MIT-Manipal-Techtatva'>Buy Kits Online</a>");
	if(name == "MATLAB")
		$(".desc").html("Millions of engineers and scientists worldwide use MATLAB to analyze and design the systems and products transforming our world.");
	else
		$(".desc").html(wdesc);
});


$(document).on("click",".cat-name",function(){

	var name = $(this).find('.name').text();
	$(".cat-desc").find('.content').hide();
	
	var allEvents = JSON.search(jsonForDescriptions, '//data[cname = "' + name + '"]/ename');
	var categoryDescription = JSON.search(jsonForCategories, '//data[cname = "' + name + '"]/cdesc');
	var categoryHeadsNames = JSON.search(jsonForCategoryHeads,'//Sheet1[CATEGORY = "' + name.toUpperCase() + '"]/Name');
	var categoryHeadsContact = JSON.search(jsonForCategoryHeads,'//Sheet1[CATEGORY = "' + name.toUpperCase() + '"]/cno.');	
	
	$(".category-name").html(name);	
	$("#catcontact").empty();
	for(var i = 0;i < categoryHeadsNames.length;i++)
		$("#catcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">' + categoryHeadsNames[i] + '</span><br><span class="chip-number">' + categoryHeadsContact[i] + '</span></div>');

	$("#owl-example").empty();
	$(".rulebooks").empty();
	$(".rtitle").empty();
	for(var i = 0;i < allEvents.length;i++)
	{
		if(allEvents[i] == "Vedanth 6.0, Day 1")
		{
			$("#owl-example").append('<div class="category-events">Vedanth 6.0</div>');
			continue;
		}
		if(allEvents[i] == "Vedanth 6.0, Day 2")
			continue;
		$("#owl-example").append('<div class="category-events">' + allEvents[i] + '</div>');
	}
	if(name == "Featured Events")
	{
		$(".category-name").html(name);	
		$(".onlyForFeaturedEvents").empty();
		$("#owl-example").append('<div class="category-events">Fuel RC 5</div><div class="category-events">Questionable Intelligence</div><div class="category-events">Robowars</div><div class="category-events">Vedanth 6.0</div><div class="category-events">Paper Presentation</div>');
		$(".onlyForFeaturedEvents").append("<table class='table table-striped'><thead><tr><th>Name</th><th style='width:150px;'>Category Heads</th><th>Description</th></tr></thead><tr><td>Paper Presentation</td><td>Kedar Cholkar 9036163130</td><td>Paper Presentation contest held as a part of TechTatva attracts some of t e best minds from all over the country. Participants are invited to present papers spanning various research topics pertaining to the different branches of engineering and science.</td></tr><tr><td>Vedanth 6.0</td><td>Aakanksh 9591311076</td><td>An exhibition of projects in various domains as well as a competition which invites partipants to showcase their research and prototype building abilities.</td></tr><tr><td>Fuel RC</td><td>Mir Aman Ali 7795144166</td><td>A National event where teams from all over the country arrive to experience the adrenaline pumping races. Comprising of stunts, drag, circuit sprint races, this event is well known across the technical colleges.</td></tr><tr><td>Questionable Intelligence</td><td>Aditya Balaji 9840530657</td><td>Quizzes designed to test the participants' general know how with regards to the latest developments in technology and greatest inventions and innovations in science.</td></tr><tr><td>Robowars</td><td>Arjun Menon 7022207454</td><td>War of the bots.T hese metal gladiators are tested on toughness, their ability to survive and technical strength in a series of knockouts under various circumstances.</td></tr></table>");

	}
	if(name == "Gaming")
	{
		$("#catcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">Arjun Koneru</span><br><span class="chip-number">9820877116</span></div>');
	}
	if(name == "Bizzmaestro")
	{
		$("#catcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">Sushrut Tathavadkar</span><br><span class="chip-number">9964355911</span></div>');
	}
	if(name == "Kraftswagon")
	{
		$("#catcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">Nakul Chodha</span><br><span class="chip-number">9901312398</span></div>');		
	}
	if(name == "Open Category")
	{
		$("#catcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">Vatsal Mathur</span><br><span class="chip-number">9538139333</span></div>');		
	}
	if(name == "Cosmicon")
	{
		$("#catcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">Ved Dubhashi</span><br><span class="chip-number">9743909669</span></div>');		
	}
	if(name == "Mechatron")
	{
		$("#catcontact").append('<div class="chip"> <img src="https://assets.ifttt.com/images/channels/8/icons/large.png" alt="Call" width="96" height="96"><span class="chip-name">Pallavi</span><br><span class="chip-number">9742704000</span></div>');		
	}
	if(name == "Robotrek")
	{
		$(".rulebooks").append('<div class="col-md-2 rtitle"><div class="content">RULEBOOKS</div></div><div class="col-md-8"><a target="_blank" href="https://drive.google.com/open?id=0B-81_yXj5lgBRTlORXBqMmt6MFI5WWhPQkQ3WHc4MTZaeEhR"><img width="150" height="150" src="images/rulebooks/mesh.png"></a><a target="_blank" href="https://drive.google.com/open?id=0B-81_yXj5lgBWldkeGpkeDZ3bnZXU2l4MnFSYVFrYXNaTW5r"><img width="150" height="150" src="images/rulebooks/robopacman.png"></a><a target="_blank" href="https://drive.google.com/open?id=0B-81_yXj5lgBWVk5dlBhaGU4YlRUcHJDSmgwVXpiczRsRGZN"><img width="150" height="150" src="images/rulebooks/vertigo.png"></a></div>');
	}
	$(".catheads").show();
	$("#catdesc").html(categoryDescription);
	$(".catdesc").show();
	carouselIt();

});

$(document).on("click","#submit",function(){
	$.ajax({
		url : 'contact.php',
		type : 'post',
		data : 'name=' + $("#name").val() + "&email=" + $("#emailc").val() + "&message=" + $("#message").val(),
		dataType : 'json',
		beforeSend : function()
		{
			$('#submit').prop('disabled', true);
		},
		success : function(data)
		{
			$('#submit').prop('disabled', false);
			$("input").val("");
			$("textarea	").val("");
			if(data.status == "true")				
				$("#messageReturn").html("We got your message! We'll get back to you.");
			if(data.status == "false")
				$("#messageReturn").html(data.message);


		}
	});
});
$(document).on("click",".closeEventModal",function(){
	$("#eventModal").toggle('modal');
})

$(document).on('keydown',".searchInput",function(){

	var searchFor = $(this).data("search");
	var searchText = $(this).val().capitalizeFirstLetter();
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

function popupForWorkshops(name)
{

}

String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}
});
