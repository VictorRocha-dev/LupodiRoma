import { products } from '../../products.js'

let productsdiv = document.getElementById("productsdiv");


let productslist = products.slice(0,6)
let modal = document.getElementById("modal");
let body = document.getElementById("body");
let cont  = 1;


let produto_modal = {

}


productslist.map( (prd) => {
    productsdiv.innerHTML += `
    <div class="mascara geral">

    <img src="${prd.file}" id="mascara" alt=" produtos mascara ">

    <h3>${prd.name}</h3>

    <div class="buy">
      <h3>R$: ${parseFloat(prd.price).toFixed(2)}</h3>
      <input type="button" value="Comprar" class="inp" data-id=${prd.name}>
    </div>
  </div>

  
    `
})

document.querySelectorAll(".inp").forEach(x => {
  x.addEventListener("click" , (y) => {


    let prd = products.find(z => z.name === y.target.dataset.id );
    produto_modal = {
      id: prd.id,
      name: prd.name,
      file: prd.file,
      price: prd.price
    }
    modal.innerHTML = `
    <div class="modal-container" id="modal_container">
    <div class="modal">
      <div class="image">
        <img src="${prd.file}" id='modal-img' alt="">
      </div>
                <div class="content">
        <h1>${prd.name}</h1>
        <h3>R$ ${parseFloat(prd.price).toFixed(2)}</h3>
        
        <div class="clicks">
          <div class="additem">
            <button id="menus"><img src="/assets/menos.svg" alt=""></button>
            <div class="add" id="cont" > 1</div>
            <button id="add" ><img src="/assets/mais.svg" alt=""></button>
          </div>
          </div>
          <div class="addtocart">
          <button id="adicionarcart">Adicionar ao carrinho</button>
        </div>

      </div>
      <div class="close">
      <button id="close"><img src="/assets/close.svg" alt=""></button>
    </div>


    `

    body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

    let modal_container = document.getElementById("modal_container")
    let close = document.getElementById("close")
    let add = document.getElementById("add");
    

  close.addEventListener("click" , () => {
    modal_container.classList.remove('show')
    modal_container.style.display ="none"
    body.style.backgroundColor = "#ffff";
    cont = 1;



  })
  document.getElementById("adicionarcart").addEventListener("click" , () => {
    window.location.href = "/pages/cart/index.html";
  })






  document.getElementById("adicionarcart").addEventListener("click" , () => {
    let productsStorage = {
      name: prd.name,
      quant: cont,
      price: prd.price * cont,
      file: prd.file
    }
      
  let storage = JSON.parse(localStorage.getItem('bagShop')) || []
  storage.push(productsStorage)
  localStorage.setItem('bagShop', JSON.stringify(storage))



  let priceStorage = {

    price: prd.price * cont,
    
  }
    
let finalprice = JSON.parse(localStorage.getItem('priceShop')) || []
finalprice.push(priceStorage)
localStorage.setItem('priceShop', JSON.stringify(finalprice))
console.log(priceStorage);
 

  window.location.href = "/pages/cart/index.html";
  })












  add.addEventListener("click" , () => {
    cont++;
    document.getElementById("cont").textContent = cont 
  })

  menus.addEventListener("click" , () => {
    if(cont != 1 ){
      cont--;
      document.getElementById("cont").textContent = cont 
    }

  })
  })


  
  
})

