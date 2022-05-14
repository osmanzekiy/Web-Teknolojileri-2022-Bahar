<?php
$durum=null;
if(isset($_POST["bildirim"])){
    $durum="Bildirim Almak İstiyor";
}
else{
    $durum="Bildirim Almak İstemiyor";
}
?>


<table>
    <tr>
        <td>E-postanız:</td>
        <td><?php echo $_POST["eposta"];?></td>
    </tr>
    <tr>
        <td>Ad Soyad:</td>
        <td><?php echo $_POST["adsoyad"];?></td>
    </td>
    <tr>
        <td>Adres:</td>
        <td><?php echo $_POST["adres"];?></td>
    </tr>
    <tr>
        <td>Mesajınız</td>
        <td><?php echo $_POST["mesaj"];?></td>
    </tr>
    <tr>
        <td>Konunuz</td>
        <td><?php echo $_POST["konu"];?></td>
    </tr>
    <tr>
        <td>Cinsiyet</td>
        <td><?php echo  $_POST["cinsiyet"]; ?></td>
    </tr>
    <tr>
        <td>Bildirim</td>
        <td><?php echo $durum ;?></td>
    </tr>
</table>