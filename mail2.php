<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "Serre";

$nameTwo = trim($_POST["name2"]);
$emailTwo = trim($_POST["user_email2"]);
$phoneTwo = trim($_POST["user_phone2"]);
$message = "Имя: $nameTwo \nПочта: $emailTwo \nТелефон: $phoneTwo";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>