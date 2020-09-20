<?php

$body = "<p>Sender's Name: ".$_POST['name']."</p><br>"."<p>Sender's Email: ".$_POST['email']."</p><br>"."<p>Sender's Message: ".$_POST['message']."</p><br>";

$autobody = "<link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' rel='stylesheet'>
<img src='https://mhsbyteclub.com/image/byte.png' style='width: 350px; margin: auto; display: block;'>
<div style='width: 80%; margin-left: 10%;'><p style='font-family: sans-serif; font-weight: 600; font-size: 30px;'>Your contact request has been recieved!</p><p style='font-family: sans-serif; font-weight: 300; font-size: 20px;'>Please allow 2 business days for a response.</p></div>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Exception class. */
require '../PHPMailer/src/Exception.php';

/* The main PHPMailer class. */
require '../PHPMailer/src/PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
require '../PHPMailer/src/SMTP.php';

$mail = new PHPMailer();
$auto = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = "smtp";
$auto->IsSMTP();
$auto->Mailer = "smtp";

$mail->SMTPDebug  = 1;  
$mail->SMTPAuth   = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port       = 587;
$mail->Host       = "smtp.gmail.com";
$mail->Username   = "contactbyteclub@gmail.com";
$mail->Password   = "Libbles1";

$mail->From = "contactbyteclub@gmail.com";
$mail->FromName = "Byte Club";
$mail->AddReplyTo($_POST['email'], $_POST['name']);
$mail->addAddress("mhsbyteclub@gmail.com", "Byte Club");
$mail->isHTML(true);
$mail->Subject = "Contact: ".$_POST['subject'];
$mail->Body = $body;

if($_POST['valid'] == "yes") {
	$mail->send();
}

$auto->SMTPDebug  = 1;  
$auto->SMTPAuth   = TRUE;
$auto->SMTPSecure = "tls";
$auto->Port       = 587;
$auto->Host       = "smtp.gmail.com";
$auto->Username   = "contactbyteclub@gmail.com";
$auto->Password   = "Libbles1";

$auto->From = "contactbyteclub@gmail.com";
$auto->AddReplyTo('mhsbyteclub@gmail.com', 'Byte Club');
$auto->FromName = "Byte Club";
$auto->addAddress($_POST['email'], $_POST['name']);
$auto->isHTML(true);
$auto->Subject = "Contact Request Received";
$auto->Body = $autobody;

if($_POST['valid'] == "yes") {
	$auto->send();
}

