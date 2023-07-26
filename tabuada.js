const frm =  document.querySelector("form");
const resp = document.querySelector("pre");
const respPar = document.querySelector("#outPar");
const respImpar = document.querySelector("#outImpar");


frm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);

    let resposta = "";
    let respostaPar = 0;
    let respostaImpar = 0;
    for(let i = 1; i<=10; i ++){
        if(numero*i%2 === 0){
            respostaPar += numero*i;
        }else{
            respostaImpar += numero*i;
        }
        resposta += numero + " X " + i + " = "+ (numero*i)+"\n";
    }
    
    
    resp.innerText = resposta;
    respPar.innerText = "A soma dos pares é: " + respostaPar+".";
    respImpar.innerText ="A soma dos impares é: " + respostaImpar+".";

    
})