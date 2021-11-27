function next(){
    let validador = true;

    let cep  = document.getElementById("cep").value;
    let bairro = document.getElementById('bairro').value;
    let endereco =  document.getElementById('endereço').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let numero  =  document.getElementById('numero').value;

    if(cep == "" && bairro =="" && endereco =="" && cidade == "" && estado==""){
        validador = false;
    }
    if(numero ==""){
        validador = false;
    }
  
        
    if(validador == false){
        alert("campos vazios")
    }else{
        window.location.href = "/pages/payout/index.html";
    } 
}

