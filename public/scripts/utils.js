
window.addEventListener('load', () =>{
   
    const passToFloatValues = (value) => {
        return (parseFloat(value) * 1).toFixed([2]).toString().replace('.', ',')
    } 
    const elementsWithValuesToParseFloat =  document.querySelectorAll(".transforme-values-to-float-with-js")
    for(elementHtml of elementsWithValuesToParseFloat) {

        elementHtml.value = passToFloatValues(elementHtml.value)
        console.log(elementHtml.innerHTML)
    }

    
})

