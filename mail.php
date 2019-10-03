<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "LeeFine";

$name = trim($_POST["name"]);
$email = trim($_POST["user_email"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $email \nТекст: $text" ;

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>