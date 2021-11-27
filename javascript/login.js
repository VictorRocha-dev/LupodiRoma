let correct = false;
let tokenId = document.getElementById("tokenId")
function singUp(e) {
  event.preventDefault();
  var fname = document.getElementById("fname").value;
  var usuario = document.getElementById("usuario").value;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  let user = {
    fname,
    usuario,
    email,
    pwd,
  };
  var json = JSON.stringify(user);
  localStorage.setItem("USER", json);
}
function validation() {
  var pwdtoken = document.getElementById("pwdtoken").value;
  var usertoken = document.getElementById("usertoken").value;

  var patethic = JSON.parse(localStorage.getItem("USER"));

  let userid = patethic.usuario;

  let pwdid = patethic.pwd;

  if (userid == usertoken && pwdid == pwdtoken) {
    correct = true;
    var correctstore = {
      correct,
    };

    localStorage.setItem("TOKEN", JSON.stringify(correctstore));
  } else {
    window.alert("Usuario ou senha incorreta");
  }

  if (correct == true) {
    window.location.href = "/index.html";
  }
}


let token = JSON.parse(localStorage.getItem("TOKEN"))

if(token.correct == true){

    

    
    tokenId.innerHTML = `
    <a id="sair">Sair</a>
    `
    let sair = document.getElementById("sair")
    sair.addEventListener("click" , () => {
        localStorage.removeItem("TOKEN")
        location.reload()
    })


}else if(token.correct == false){
    tokenId.innerHTML = `
    <a href="/pages/login-register/login/index.html" id="tokenId"></a>`
}