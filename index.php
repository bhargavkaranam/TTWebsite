<?php
require_once 'Mobile-Detect-2.8.22/Mobile_Detect.php';

$detect = new Mobile_Detect;


if ( $detect->isMobile() ) {
	header("location:m/");
}


if( $detect->isTablet() ){
	header("location:m/");
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="icon" href="images/logo.png" type="image/png" sizes="16x16">
	<meta property="og:title" content="Techtatva '16" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://techtatva.in" />
	<meta property="og:image" content="https://techtatva.in/images/fbImage.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>TechTatva'16</title>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Lora:700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="bootstrap.css">
	<link rel="stylesheet" type="text/css" href="jquery.fullPage.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" href="owl/owl-carousel/owl.carousel.css"> 
	<link rel="stylesheet" href="owl/owl-carousel/owl.theme.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://use.fontawesome.com/eb870cce25.js"></script>
	<style>
		.card {
			
			transition: 0.3s;
			width: 300px;
			display: inline-block;
			margin-bottom: 20px;
		}
		.card p
		{
			color:#000;
		}
		.card:hover {
			box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
		}

		.card-block {
			padding: 2px 16px;
		}
	</style>
</head>
<body>
	<div class="show-beginning">
		<div class="content quote">
			
		</div>
	</div>

	
	<div class="modal fade" id="myModal" tabindex="-1" data-keyboard="false" data-backdrop="static" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					
					<h2>Register</h2>
					
				</div>
				<div class="modal-body">
					
					<div class="err"></div>
					<div class="form-group group">
						<label for="email">Email</label>
						<input type="text" class="form-control" name="email" id="email" placeholder="Enter your email" required>
					</div>
					
					<center><input id="login" class="btn btn-success" type="submit" value="Register"></center>
					
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div>
	<div style="position:relative;" class="modal fade" id="eventModal" tabindex="-1" data-keyboard="false" data-backdrop="static" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					
					<h2 class="eventModalName"></h2>
					
				</div>
				<div class="modal-body eventModalDescription">
					


				</div>
				<div class="modal-footer">
					<button type="button" class="close closeEventModal btn-success" data-dismiss="modal">Close</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div>


	<div style="display:none;" id="fullpage">
		<div class="container">			

			<div class="section active" id="section1" style="background:url(bg.gif);background-size:cover;background-position:center center;">
				<nav class="nav">
					<!-- <h1 class="heading" align="center">TechTatva '16</h1> -->
					<ul>
						<li data-moveto="2">Schedule</li>
						<li data-moveto="4">Categories</li>
						<li data-moveto="3">Workshops</li>
						<li data-moveto="5">Conclave</li>
						<li data-moveto="6">Gallery</li>
						<li data-moveto="7">Contact</li>
						<li style="display:none;">Results</li>
						<li data-moveto="8">Sponsors</li>

						<a style="text-decoration:none;color:#fff;" href="http://onlineevents.techtatva.in"><li style="background:#009688;">Online Events</li></a>

					</ul>
				</nav>
				<div class="updates_div">

				</div>
				<div class="content-test">
					<img src="asd.svg" height="600" class="lp-image">
					<div class="head-sub">

						<h1 class="heading">TechTatva '16</h1>
						<!-- <br> -->

						<div align="center" class="sub">Passionately Curious | 12th October to 15th October</div>

					</div>
				</div>

			</div>
			<div class="section" id="section2">
				<div class="content">

					<!-- Schedule Page  -->

					<div class="schedule-outer-wrapper">
						
						
						
						<div class="schedule-subheader">
							<div class="schedule-subheader-one"><input class="searchInput" data-search="schedule-body-one" type="text" placeholder="Search for Events"><h2>DAY 1</h2><p>12th October</p></div>
							<div class="schedule-subheader-two"><input class="searchInput" data-search="schedule-body-two" type="text" placeholder="Search for Events"><h2>DAY 2</h2><p>13th October</p></div>
							<div class="schedule-subheader-three"><input class="searchInput" data-search="schedule-body-three" type="text" placeholder="Search for Events"><h2>DAY 3</h2><p>14th October</p></div>
							<div class="schedule-subheader-four"><input class="searchInput" data-search="schedule-body-four" type="text" placeholder="Search for Events"><h2>DAY 4</h2><p>15th October</p></div>

						</div>
						<div class="schedule-body">
							<div class="schedule schedule-body-one"></div>
							<div class="schedule schedule-body-two"></div>
							<div class="schedule schedule-body-three"></div>
							<div class="schedule schedule-body-four"></div>
						</div>

						
					</div>


					<!-- Schedule Page -->



				</div>
			</div>
			<div class="section" id="section3" style="background:#fff;">
				<div class="workshop-names col-md-3"></div>
				<div class="workshop-desc col-md-6" style="background:url(images/pattern.png);background-size:cover;height:100vh;">
					<div class="content">
						<h1>WORKSHOPS</h1>
					</div>
					<div class="col-md-4 col-md-offset-4">

						<h2 class="workshop-name-desc" align="center"><!-- Cryptoss --></h2>
					</div>

					<div class="row vcenter" style="display:none;">
						<table class="table">
							<thead>
								<tr>
									<th>Date</th>
									<th>Venue</th>
									<th>Category</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="wdate"></td>
									<td class="wvenue"></td>
									<td class="wcat"></td>
								</tr>
							</tbody>
						</table>

					</div>
					<br><br>
					<div class="row">
						<div class="col-md-6 workshopcontact" style="display:none;">
							<h2 align="center">Contact</h2>
							<div id="workshopcontact" style="text-align:center;"></div>
						</div>
						<div class="col-md-6 workshopdesc" style="display:none;">
							<h2 align="center">Description</h2>
							<div class="desc"></div>
						</div>
					</div>
				</div>
				<div class="col-md-3 workshop-names-external"></div>
			</div>
			<div class="section" id="section3" style="background:#fff;">
				<div class="cat-names col-md-3"></div>
				<div class="cat-desc col-md-9" style="background:url(images/pattern.png);background-size:cover;height:100vh;">
					<div class="content">
						<h1>CATEGORIES</h1>
					</div>
					<div class="col-md-4 col-md-offset-4">

						<h2 class="category-name" align="center"><!-- Cryptoss --></h2>
					</div>

					<div class="row vcenter">

						<div id="owl-example" class="owl-carousel col-md-12">
							<div></div>

						</div>
					</div>
					<br><br>
					<div class="row onlyForFeaturedEvents">
						<div class="col-md-6 catheads" style="display:none;">
							<h2 align="center">Contact</h2>
							<div id="catcontact"></div>
						</div>
						<div class="col-md-6 catdesc" style="display:none;">
							<h2 align="center">Description</h2>
							<div id="catdesc"></div>
						</div>
					</div>
					<div class="row rulebooks">

					</div>
				</div>
			</div>
			<!-- <div class="section" id="section2">
				<div class="content">

					<div class="schedule-outer-wrapper">


						<div class="schedule-subheader">
							<div class="schedule-subheader-one"><input class="searchInput" data-search="schedule-body-one" type="text" placeholder="Search for Events"><h2>DAY 1</h2><p>12th October</p></div>
							<div class="schedule-subheader-two"><input class="searchInput" data-search="schedule-body-two" type="text" placeholder="Search for Events"><h2>DAY 2</h2><p>213th October</p></div>
							<div class="schedule-subheader-three"><input class="searchInput" data-search="schedule-body-three" type="text" placeholder="Search for Events"><h2>DAY 3</h2><p>14th October</p></div>
							<div class="schedule-subheader-four"><input class="searchInput" data-search="schedule-body-four" type="text" placeholder="Search for Events"><h2>DAY 4</h2><p>15th October</p></div>

						</div>
						<div class="schedule-body">
							<div class="schedule schedule-body-one"></div>
							<div class="schedule schedule-body-two"></div>
							<div class="schedule schedule-body-three"></div>
							<div class="schedule schedule-body-four"></div>
						</div>
						<div class="schedule-footer">
							<div class="schedule-footer-one"><img class="scroll" src="images/mouse.svg" alt="mouse"></div>
							<div class="schedule-footer-two"><img src="images/mouse.svg" alt="mouse"></div>
							<div class="schedule-footer-three"><img src="images/mouse.svg" alt="mouse"></div>
							<div class="schedule-footer-four"><img src="images/mouse.svg" alt="mouse"></div>
						</div>
					</div>					

				</div>
			</div> -->
			<div class="section" id="section5" style="background:#fff;">
				
				<div class="conclave-desc col-md-12" style="background:url(images/pattern.png);background-size:cover;height:100vh;">
					<h2 style="margin-bottom:8px;" align="center">The Manipal Conclave</h2>
					
					<div class="content-conclave">
						<div id="q">
							<!-- <div class="speaker">?</div>
							<div class="speaker">?</div>
							<div class="speaker">?</div>
							<div class="speaker">?</div> -->
							<div class="card">
								<img src="images/conclave/biswapati.png">
								<div class="card-block">
									<h4><b>Biswapati Sarkar</b></h4>
									<p>Creative Director, The Viral Fever</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/anusreedharan.png" alt="Card image cap">
								<div class="card-block">
									<h4>Anu Sridharan</h4>
									<p>CEO & Co-Founder, NextDrop</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/rohit.png" alt="Card image cap">
								<div class="card-block">
									<h4>Rohit Raj</h4>
									<p>Director of Sneh Hotels Pvt.Ltd</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/sandeep.png" alt="Card image cap">
								<div class="card-block">
									<h4>Sandeep Bekal</h4>
									<p>CEO & Co-founder Expoworld</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/sudhir.png" alt="Card image cap">
								<div class="card-block">
									<h4>PJ Sudhir</h4>
									<p>Commadore, Indian Navy</p>									
								</div>
							</div>
							
							<div class="card">
								<img src="images/conclave/anshika.png" alt="Card image cap">
								<div class="card-block">
									<h4>Anshika Sinha</h4>
									<p>Manager, Tata Administrative Services</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/ayush.png" alt="Card image cap">
								<div class="card-block">
									<h4>Ayush Prasad</h4>
									<p>Assistant Commissioner of Government of Maharashtra</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/vijay.png" alt="Card image cap">
								<div class="card-block">
									<h4>Vijay Raghav Varada</h4>
									<p>CEO & Founder, Fractal Works</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/akhilesh.png" alt="Card image cap">
								<div class="card-block">
									<h4>Akhilesh Oberoi</h4>
									<p>Analyst, KPMG</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/sumit.png" alt="Card image cap">
								<div class="card-block">
									<h4>Sumit Sourav</h4>
									<p>CEO & Co-Founder, Campus Diaries</p>									
								</div>
							</div>
							<div class="card">
								<img src="images/conclave/aishwarya.png" alt="Card image cap">
								<div class="card-block">
									<h4>Aishwarya Shetty</h4>
									<p>Fellow-2016 Cohart, Teach For India</p>									
								</div>
							</div>
						</div>						
						
					</div>
					
				</div>
			</div>

			<div class="section section-3" id="section6">
				<div class="content" style="margin-bottom:50px;">
					<div class="slide" data-anchor="slide2" id="slide1">
						<div class="img-container">
							<div class="img-1 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-2 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-3 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-4 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-5 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-6 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-7 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-8 img-gallery  tada"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-9 img-gallery  tada"><div class="img-caption"><h4>TechTatva</h4></div></div>
						</div>
					</div>
					<div class="slide" data-anchor="slide1" id="slide2">
						<div class="img-container">
							<div class="img-10 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-11 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-12 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-13 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-14 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-15 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-16 img-gallery"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-17 img-gallery  tada"><div class="img-caption"><h4>TechTatva</h4></div></div>
							<div class="img-18 img-gallery  tada"><div class="img-caption"><h4>TechTatva</h4></div></div>
						</div>
					</div>

				</div>
			</div>
			<div class="section" id="section7">

				<div class="content-test-1">
					<h2 class="sug-text" align="center">LEAVE US A NOTE</h2>

					<div class="col-md-5 col-md-offset-1">
						<div class="col-md-10 col-offset-md-1">
							<br><br>
							<div class="row" style="margin-bottom:10px;">
								<img src="https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/12141696_407910739408144_3018009198570956796_n.jpg?oh=8871d6234abe8a729629ee3d6229953e&oe=585F2BAD" class="img-circle contact-image" width="130" height="130">
								<div class="contact-info">
									<h3>Aakar Jain</h3>								
									<h3><a href="mailto:aakarjain95@gmail.com">aakarjain95@gmail.com</a></h3>
								</div>
							</div>
							<div class="row" style="margin-bottom:10px;">
								<img src="images/sid.png" class="img-circle contact-image" width="130" height="130">
								<div class="contact-info">
									<h3>Siddharth Bharteeya</h3>								
									<h3><a href="mailto:siddharth.bharteeya@gmail.com">siddharth.bharteeya@gmail.com</a></h3>
								</div>
							</div>
							<div class="row">
								<img src="images/disha.jpg" class="img-circle contact-image" width="130" height="130">
								<div class="contact-info">
									<h3>Disha Sarawgi</h3>								
									<h3><a href="mailto:sarawgi.disha@gmail.com">sarawgi.disha@gmail.com</a></h3>
								</div>
							</div>
						</div>																																																																	
					</div>
					<form class="col-md-4" style="padding:50px;">

						<div class="form-group">
							<label for="name">Name</label>
							<input name="name" type="text" class="form-control" id="name" required>
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<input name="email" type="email" class="form-control" id="emailc" required>
						</div>
						<div class="form-group">
							<label for="message">Message</label>
							<textarea name="message" class="form-control" id="message" required></textarea>
						</div>
						<button id="submit" type="button" class="btn btn-default">Submit</button>
						<br>
						<div class="row">
							<div class="col-md-4" id="messageReturn" style="color:#fff;"></div>
						</div>
					</form>
				</div>				
				<div class="site-footer-bottom">

					<div class="social">
						<a href="https://www.facebook.com/MITtechtatva/" target="_blank"><img src='images/fb.svg' alt="Facebook"></a>
						<a href="https://twitter.com/mittechtatva" target="_blank"><img src='images/tw.svg' alt="Twitter"></a>
						<a href="https://www.instagram.com/mittechtatva/" target="_blank"><img src='images/ig.svg' alt="Instagram"></a>
						<a href="https://www.youtube.com/user/TechTatva" target="_blank"><img src='images/yt.svg' alt="Youtube"></a>
					</div>

					<div class="app">
						<img src='images/gp.svg' alt="App Store">
						<img src='images/ios.svg' alt="Play Store">
					</div>

				</div>
			</div>
			<div class="section" id="section8">
				
				<div style="padding:20px;">
				<div style="margin-bottom:35px;" class="row">		
					
					<div style="background:url(images/sponsors/cooler-master-logo.jpg);background-size: 80%;background-position: center center;background-repeat:no-repeat" class="sponsor-logo col-md-4">
						<h2 class="sponsor-desc" align="center">Computer Hardware Partner</h2>
					</div>

					<div style="background:url(images/sponsors/SalahCar.png);background-size: 80%;background-position: center center;background-repeat:no-repeat" class="sponsor-logo col-md-4 col-md-offset-4">
						<h2 class="sponsor-desc" align="center">Entrepreneurial Partner</h2>
					</div>
				
				</div>
				
				<div class="row">
					<div style="background:url(images/sponsors/digital-ocean-logo-4x3.png);background-size: 80%;background-position: center center;background-repeat:no-repeat" class="sponsor-logo col-md-4">
						<h2 style="margin:-50px;" class="sponsor-desc" align="center">Cloud Partner</h2>
					</div>
					<div style="background:url(images/sponsors/women.png);background-size: 80%;background-position: center center;background-repeat:no-repeat" class="sponsor-logo col-md-4">
						<h2 style="margin:-20px;" class="sponsor-desc" align="center">Social Welfare Partner</h2>
					</div>
					<div style="background:url(images/sponsors/nvidia-logo-1.png);background-size: 60%;background-position: center center;background-repeat:no-repeat" class="sponsor-logo col-md-4">
						<h2 style="margin:-50px;" class="sponsor-desc" align="center">Visual Computing Partner
						</div>
					</div>
					<br>
					<div class="row">
						<div class="col-md-4">
							
						</div>
						<div class="col-md-4">
							
						</div>
						<div class="col-md-4">
							
						</div>
					</div>
					<div class="row">
						
						<div style="background:url(images/sponsors/pharma.png);background-size: 80%;background-position: center center;background-repeat:no-repeat;" class="sponsor-logo col-md-4">
							<h2 align="center" class="sponsor-desc">Pharmaceutical Partner</h2>
						</div>
						<div style="background:url(images/sponsors/paisa_wapas.png);background-size: 80%;background-position: center center;background-repeat:no-repeat" class="sponsor-logo col-md-4">
							<h2 align="center" class="sponsor-desc">Cashback Partner</h2>
						</div>
						<div style="background:url(images/sponsors/robocraze.png);background-size: 80%;background-position: center center;background-repeat:no-repeat" class="sponsor-logo col-md-4">
							<h2 align="center" class="sponsor-desc">Technology Partner</h2>
						</div>
					</div>

					
			</div>
			</div>
		</div>



		<!--======================= Scripts ================================-->


		<script   src="https://code.jquery.com/jquery-2.2.4.js"   integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="   crossorigin="anonymous"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.3.1/vivus.js"></script>
		<script type="text/javascript" src="jquery.fullPage.js"></script>
		<script src="https://use.fontawesome.com/eb870cce25.js"></script>
		<script type="text/javascript" src="lettering.js"></script>


		<!-- =============================================================== -->
		<script type="text/javascript" src="bootstrap.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/TweenMax.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js"></script>

		<script type="text/javascript" src="typed.js"></script>
		<script src="owl/owl-carousel/owl.carousel.js"></script>
		<script type="text/javascript" src="defiant.js"></script>
		<script src="script.js"></script>
		<script type="text/javascript">
			
			$(window).on("load",function(){

				$(".heading").addClass("animated bounceInDown");
				$('.heading').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

				});

				$(document).on("click","li",function(){
					var num = $(this).data("moveto");
					$.fn.fullpage.moveTo(parseInt(num));

				});


				$(document).ready(function() {
					$("#owl-example").owlCarousel();
					var movementStrength = 25;
					var height = movementStrength / $(window).height();
					var width = movementStrength / $(window).width();
					$("#section1").mousemove(function(e){
						var pageX = e.pageX - ($(window).width() / 2);
						var pageY = e.pageY - ($(window).height() / 2);
						var newvalueX = width * pageX * -1 - 25;
						var newvalueY = height * pageY * -1 - 50;
						$('#section1').css("background-position", newvalueX+"px     "+newvalueY+"px");
					});

				});

				


				$('#fullpage').fullpage({
				//#6e61a1
				sectionsColor:['#212121','#BFDA00','#FFF','#212121','black','#5090a4','#6e61a1','#294459'],
      // anchors: ['first', 'second', 'third', 'fourth', 'foot'],      
      menu: '#menu',
      css3:true,
      verticalCentered:false,
      scrollOverflow : true
  });

			});


		</script>
	</body>
	</html>
