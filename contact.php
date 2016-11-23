<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) 
{
	$con = mysqli_connect("localhost","root","techTatva!6","techtatva16");

	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		echo json_encode(array("status" => "false","message" => "Invalid EMAIL"));
		die();
	}
	$name = mysqli_real_escape_string($con,$_POST['name']);
	$email = mysqli_real_escape_string($con,$_POST['email']);
	$message = mysqli_real_escape_string($con,$_POST['message']);



	$sql = "INSERT INTO contact(name,email,message) VALUES('$name','$email','$message')";
	$result = mysqli_query($con,$sql);
	if($result)
		echo json_encode(array("status" => "true","message" => "Done"));
	else
		echo json_encode(array("status" => "false","message" => "Some error occurred"));
}