<?php
$eposta=$_POST["mail"];
$sifre=$_POST["pass"];

if($sifre=="g211210024" && $eposta=="g211210024@sakarya.edu.tr"){
    header('Location: http://qweasd.byethost9.com/web-proje/hosgeldiniz.html');
}
else{
    
    
    header('Location: http://qweasd.byethost9.com/web-proje/login.html');
   
}

















?>