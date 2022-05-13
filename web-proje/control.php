<?php
$eposta=$_POST["mail"];
$sifre=$_POST["pass"];

if($sifre=="g211210024" && $eposta=="g211210024@sakarya.edu.tr"){
    header('Location: http://localhost/hosgeldiniz.html');
}
else{
    header('Location: http://localhost/login.html');
}

















?>