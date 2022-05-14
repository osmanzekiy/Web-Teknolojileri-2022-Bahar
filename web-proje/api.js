document.querySelector("#button1").addEventListener("click",getApi);

function getApi(){
    var jsonapi;
    
    fetch("https://api.coinlore.net/api/tickers/?start=0&limit=10").then(data=>{
        return data.json()
    }).then(displayResult)}
    const displayResult =(result)=>{
        console.log(result);
        jsonapi=result;
        let output="<ul>";
     for(let coin of result.data){
         output+=`<li>Coin Adı: ${coin.name}</li>`;
         output+=`<li>Coin Değeri: ${coin.price_usd}</li><br>`;
         //document.getElementById("output").innerHTML+=coin.price_usd;
     }
     output+="</ul>"
       document.getElementById("output").innerHTML=output;
    }
    
    
 