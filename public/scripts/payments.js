const pix = document.querySelector('.menu-pix');
const credit = document.querySelector('.menu-cartao');
const form = document.querySelector('.form-payment');
const pixContent = document.querySelector('.payment-pix');
const creditContent = document.querySelector('.credit-content');
 //---------------- functions for methods payments  ----------------------------------------------- // 

pix.addEventListener("click", ()=>{
    creditContent.classList.toggle('hidden');
    pixContent.classList.toggle('hidden');
})
credit.addEventListener("click", ()=>{
    creditContent.classList.toggle('hidden');
    pixContent.classList.toggle('hidden');
})