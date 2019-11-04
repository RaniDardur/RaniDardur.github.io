<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "Serre";

$name = trim($_POST["name"]);
$email = trim($_POST["user_email"]);
$phone = trim($_POST["user_phone"]);
$message = "Имя: $name \nПочта: $email\nТелефон: $phone ";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>