<?php
 if($_POST['type'] == "schedule")
 	echo file_get_contents("http://api.mitportals.in/schedule");
 else if($_POST['type'] == "description")
 	echo file_get_contents("http://api.mitportals.in/events");
 else if($_POST['type'] == "workshops")
 	echo file_get_contents("http://api.mitportals.in/workshops");
 else if($_POST['type'] == "categories")
 	echo file_get_contents("http://api.mitportals.in/categories");
 ?>