const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    limite = frm.inLimite.value;
    velocidade = frm.inVelocidade.value;

    

    if(velocidade<=limite){
        resp1.innerText = `Sem multa.`;
    }else if(limite/velocidade >= 0.83) {
         resp1.innerText = `Multa leve.`;
    }else {
        resp1.innerText = `Multa Grave`;
    }

})