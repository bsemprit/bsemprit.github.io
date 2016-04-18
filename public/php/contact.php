<?php 
 
	if($_GET['action'] == "send"){
		$name = $_GET['nameSubject'];
		$email = $_GET['email'];
		$message = $_GET['message'];
		$formcontent="From: $name \n Message: $message";
		$recipient = "bsemprit@gmail.com";
		$subject = "Contact from Website";
		$mailheader = "From:" . $email . "\r\n";
		// mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
		echo "ok";
	}

