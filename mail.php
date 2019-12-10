<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "StroyInfest";

$name = trim($_POST["name"]);
$phone = trim($_POST["user_email"]);
$message = "Имя: $name \nТелефон: $phone ";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>

<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "StroyInfest";

$nameOne = trim($_POST["name1"]);
$emailOne = trim($_POST["user_email1"]);
$phoneOne = trim($_POST["user_phone1"]);
$message = "Имя: $nameOne \nПочта: $emailOne\nТелефон: $phoneOne ";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>

<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "StroyInfest";

$nameTwo = trim($_POST["name2"]);
$emailTwo = trim($_POST["user_email2"]);
$phoneTwo = trim($_POST["user_phone2"]);
$message = "Имя: $nameTwo \nПочта: $emailTwo \nТелефон: $phoneTwo";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "StroyInfest";

$nameTwo = trim($_POST["name3"]);
$emailTwo = trim($_POST["user_email3"]);
$phoneTwo = trim($_POST["user_phone3"]);
$message = "Имя: $nameTwo \nПочта: $emailTwo \nТелефон: $phoneTwo";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
<?php

$recepient = "dardurranisc@gmail.com";
$siteName = "StroyInfest";

$nameTwo = trim($_POST["name4"]);
$emailTwo = trim($_POST["user_email4"]);
$phoneTwo = trim($_POST["user_phone4"]);
$message = "Имя: $nameTwo \nПочта: $emailTwo \nТелефон: $phoneTwo";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>