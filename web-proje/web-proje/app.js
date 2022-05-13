document.querySelector("#button1").addEventListener("click",getApi);

function getApi(){
    fetch("https://api.github.com/users").then(function(response){
    return response.json();
}).then(function(users){
    let output="<ul>";
    users.forEach(function(user){
        output+=`<li>Kullanıcı Adı: ${user.login}</li>`;
    });
    document.getElementById("output").innerHTML+=output;

    
});
}