function iletisimControl() {
    let x = document.forms["MyForm"]["eposta"].value;
    let y=document.forms[][].value;
    if (x == "" ||  !x.includes("@")  ) {
      
      alert("E-posta veya Şifre Alanı Hatalı!!!");
      return false;
    }
}