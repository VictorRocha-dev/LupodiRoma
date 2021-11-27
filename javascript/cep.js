'use strict';

let preencherFormulario = (endereco) => {
    document.getElementById('endereço').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
     
}

let pesquisarCep = async() => {
    let cep  = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let dados = await fetch(url);
    let endereço = await dados.json();
    if(endereço.hasOwnProperty("erro")){
        document.getElementById('endereço').value = "Cep não encontrado";
    }
    else{
        preencherFormulario(endereço);
    }

   


};

document.getElementById("cep").addEventListener("focusout" , pesquisarCep);



