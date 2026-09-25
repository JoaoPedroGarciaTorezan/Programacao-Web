const inicio = document.querySelector("#inicio")
const fim = document.querySelector("#fim")
const pesar = document.querySelector("#pensar")
const frase = document.querySelector("#coment")
const botaoAd = document.querySelector("#adivinhar")
const numAd = document.querySelector("#ad");

let x;
let clickPensar = false;
let tentativas=0;

pesar.addEventListener('click', () => {

    let ini_valor = Number(inicio.value)
    let fim_valor = Number(fim.value)
    clickPensar = true;

    //Botão clicado, mas não tem nenhum valor nos inputs
    if(!ini_valor || !fim_valor){
        frase.innerText = "Digite um número inteironos campos início e fim!"
        return;
    }

    if(ini_valor > fim_valor){
        frase.innerText = "Valores de intervalo inválidos! O valor de fim deve ser maior que o início."
        return;
    }

    if(ini_valor < 0 || fim_valor < 0){
        frase.innerText = "Valores de intervalo inválidos! Os valores não podem ser negativos."
        return;
    }


    frase.innerHTML = `Pronto! Pensei em um número entre ${ini_valor} e ${fim_valor}. Tente Adivinhar.`
    x = ValorAleatorio(ini_valor,fim_valor);


})

botaoAd.addEventListener('click', () => {

    if(!clickPensar){
        frase.innerText = "Calma Jovem! Nem pensei em nenhum número. Lembrou de clicar no Pensar?"
        return;
    }

    let num_pes = Number(numAd.value)

    if(!num_pes){
        frase.innerText = "Digite um número inteiro para tentar adivinhar o que pensei"
        return;
    }

    tentativas++;

    if(num_pes > x){
        frase.innerText = "O número que pensei é menor"
    }
    else if(num_pes < x)
        frase.innerText = "O número que pensei é maior"
    else    
        Ganhou(num_pes);
    
})


const ValorAleatorio = (ini, fim) => {

    let x = Math.floor(Math.random() * (fim-ini+1)) + ini;
    return x;
}


const Ganhou = (num_pes) => {

    frase.innerText = `Parabens!!! Eu pensei no número ${num_pes}. Você conseguiu após ${tentativas} tentativa(s).`
    inicio.value = ""
    fim.value = ""
    tentativas=0
    numAd.value = ""
}