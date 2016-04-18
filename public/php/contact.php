<?php 
 
	if($_POST['action'] == "send"){
		$name = $_POST['nameSubject'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$formcontent="From: $name \n Message: $message";
		$recipient = "bsemprit@gmail.com";
		$subject = "Contact from Website";
		$mailheader = "From:" . $email . "\r\n";
		// mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
		echo "ok";
	}

