const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    numero = frm.inNumero.value;

    if(numero<2 || numero >100){
        alert('O numero deve estar entre 2 e 100');
    }
    if(numero ==2){
        return resp1.innerText = `É primo.`;
    }

    for(i = 2; i<numero; i++){
        if(numero%i==0){
            return  resp1.innerText = `Não é primo.`;
        }
        return resp1.innerText = `É primo.`;
    }

})