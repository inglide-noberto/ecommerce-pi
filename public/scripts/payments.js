const pix = document.querySelector('.menu-pix');
const credit = document.querySelector('.menu-cartao');
const form = document.querySelector('.form-payment');
const pixContent = document.querySelector('.payment-pix');
const creditContent = document.querySelector('.credit-content');
 //--------------------------------------------------------------- // 
const moreProducts = document.querySelector('.button-quantity more');
const lessProducts = document.querySelector('.button-quantity less');


 //---------------- functions for methods payments  ----------------------------------------------- // 

pix.addEventListener("click", ()=>{
    creditContent.classList.toggle('hidden');
    pixContent.classList.toggle('hidden');
})
credit.addEventListener("click", ()=>{
    creditContent.classList.toggle('hidden');
    pixContent.classList.toggle('hidden');
})

//--------------------- calculations shopping items ------------------------------------------ // 

var quantity = 0;

moreProducts.addEventListener("click" , ()=>{
    quantity++;
    console.log(quantity)
})
lessProducts.addEventListener("click" , ()=>{
    quantity--;
    console.log(quantity)
})

