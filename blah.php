<?php
 if($_POST['type'] == "schedule")
 	echo file_get_contents("http://api.mitportals.in/schedule");
 else if($_POST['type'] == "description")
 	echo file_get_contents("http://api.mitportals.in");
 else if($_POST['type'] == "workshops")
 	echo file_get_contents("http://api.mitportals.in/workshops");
 ?>