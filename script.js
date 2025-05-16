let botao = document.querySelector("#boasVindas")
const mensagem = document.querySelector("#mensagem")

let clicado=false;
let contaClicks=0;

botao.addEventListener("click", e =>{
    contaClicks++;
    if(contaClicks===1) 
        mensagem.innerHTML = "Tenha compaixão, ajude os seus companheiros em qualquer oportunidade\
            .Se a oportunidade não surge, saia do seu caminho para encontrá-la.";
    if(contaClicks===2) 
        mensagem.innerHTML = "O caminho do valente não segue os passos da estupidez.";
    if(contaClicks===3) 
        mensagem.innerHTML = "Enquanto se possa mexer, treine o corpo. Enquanto não se possa mexer,\
     treine a mente.";
    if(contaClicks===4) {
        mensagem.innerHTML = "A perfeição é uma montanha impossível de escalar que deve ser escalada \
        um pouco a cada dia.";
        contaClicks = 0;
    }

})





function message(){
    
}
