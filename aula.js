//criar referencia aos elemnetos da pagina
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");
//const = constante.
//criar um ouvinte para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //nao envia o funcionario

    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) /2;

    console.log(media);

    //mostrar a media 
    resp1.innerText = `Media das Notas é ${media.toFixed(2)}`;

    //criar as condições 
    if(media >= 7){
        resp2.innerText = `Parabens ${nome}! Você foi Aprovado(a)`;
        resp2.style.color = "blue";
    } else if(media >= 4){
        resp2.innerText = `Atenção ${nome}! Você ficou em Recuperação`;
        resp2.style.color = "green";
    }else{
        resp2.innerText = `Ops ${nome}! Você foi Reprovado`;
        resp2.style.color = "red";
    };
})