<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "Serre";

$nameOne = trim($_POST["name1"]);
$emailOne = trim($_POST["user_email1"]);
$phoneOne = trim($_POST["user_phone1"]);
$message = "Имя: $nameOne \nПочта: $emailOne\nТелефон: $phoneOne ";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>