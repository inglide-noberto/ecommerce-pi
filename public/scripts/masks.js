window.addEventListener('load', ()=> {

    jQuery("#cpf").inputmask({"mask": "999.999.999-99"});
    jQuery("#contact").inputmask({"mask": "(99) 99999-9999"});
    jQuery("#zipCode").inputmask({"mask": "99999-999"});
    jQuery("#phone").inputmask({mask: '(99) 9999[9]-9999', greedy: false});
    

})