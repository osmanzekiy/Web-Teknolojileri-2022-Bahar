function validateForm() {
    let x = document.forms["MyForm"]["eposta"].value;
    if (x == "" ||  !x.includes("@")   ) {
      
      alert("E-posta Alanını Doldurunuz!!!");
      return false;
    }
    let y=document.forms["MyForm"]["adsoyad"].value;
    if (y == "") {
      
      alert("Ad-Soyad Alanını Doldurunuz!!!");
      return false;
    }
    let z=document.forms["MyForm"]["adres"].value;
    if (z == "") {
      
      alert("Adres Alanını Doldurunuz!!!");
      return false;
    }
    let k=document.forms["MyForm"]["mesaj"].value;
    if (k == "") {
      
      alert("Mesaj Alanını Doldurunuz!!!");
      return false;
    }
    let t=document.forms["MyForm"]["sehir"].value;
    if (t == "belirtilmemis") {
      
      alert("Konu Alanını Doldurunuz!!!");
      return false;
    }
    let q=document.forms["MyForm"]["cinsiyet"].value;
    if (q!= "kadın" && q!="erkek") {
      
      alert("Cinsiyet Alanını Doldurunuz!!!");
      return false;
    }

  }
  