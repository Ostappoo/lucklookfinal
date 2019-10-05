<?php
header("Content-Type: text/plain; charset=utf-8");

if(isset($_POST['button'])) {
	
$email = "info@lucklookcompany.com"; #Email, на него придут письма
$title = "Заявка"; #Заголовок письма

$text = "
Информация о покупателе:

ФИО: ".$_POST['name']."
E-mail: ".$_POST['email']."
Тема: ".$_POST['theme']."
Сообщение: ".$_POST['text']."
Заявка пришла с сайта:" . $_SERVER['HTTP_REFERER'] ."
Время заказа: ".date("Y-m-d H:i:s");


if(mail($email, $title, $text)) {
	header('Location: good.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>