let produtos = document.getElementById("produtos");
let pricefinal = document.getElementById("finalprice");



let carrinho = []


let total = JSON.parse(localStorage.getItem("priceShop"))  || [];
let soma = 0;
let j = 0;
let price = []


total.forEach(item => {
    price.push(item.price)

})
let subtotal = price.reduce((total,currentElement) => total+= currentElement)


// for(let i = 1; i<total.length; i++){
//          j = i-1;    
//         soma = total[i].price + total[j].price 
//         console.log(soma);      
// }



carrinho = JSON.parse(localStorage.getItem("bagShop")) || [];

if(carrinho.length == 0 ){
    produtos.innerHTML = "<h1>Nenhum produto foi adicionado ao carrinho!!!</h1>"
}
else{
    carrinho.map(car =>{
        produtos.innerHTML += `
        <div class="xinsunsun">
            <div class="nome">
            
            <div class="nome-img">
                <img src="${car.file}" id="foto" alt="">
                <h3>${car.name}</h3>
            </div>
            </div>
    
            <div class="quantidade">
        
            <h3>${car.quant}</h3>
            </div>
    
            <div class="preco">
            
            <h3>R$ ${parseFloat(car.price).toFixed(2)}</h3>
            </div>
        </div>
    `
    })
}




finalprice.innerHTML = `    
<h1>resumo do pedido</h1>

<div class="produtnumber">
    <h3> ${carrinho.length} produtos</h3>
    <p>R$ ${parseFloat(subtotal).toFixed(2)}<p>
</div>
<h3 id="frete">Frete gratis</h3>

<div class="total">
    <h3>total</h3>
    <p>R$ ${parseFloat(subtotal).toFixed(2)}</p>
</div>

<a href="/pages/cep/index.html"><button id="continuar">continuar</button></a>
<div id="limpar">
    <a href="#" onclick="limpar()" >limpar carrinho</a>
</div
`





function limpar(){
    localStorage.removeItem("bagShop")
    localStorage.removeItem("priceShop")
    location.reload()
}