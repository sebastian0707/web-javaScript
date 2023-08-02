const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    limite = frm.inNumero.value;
    

    if(limite<0){
        alert('O numero dve ser maior que 0!');
    }

    for(let i = limite; i>=0;i--){
        resp1.innerText += `${i}\n`

    }

})