const nome = document.querySelector("#nome")
const b_verde = document.querySelector("#verde")
const b_vermelho = document.querySelector("#vermelho")
const adicionar = document.querySelector("#b_add")
const total = document.querySelector("#ptotal")
const ul = document.querySelector("ul")
const quant_quadro = document.querySelector("#um")

let quant= 1;
let totalq=0;

b_verde.addEventListener('click', () => {

    quant++;
    quant_quadro.innerText = quant;
 
})

b_vermelho.addEventListener('click', () => {

    quant--;
    if(quant < 1){
        quant++;
        return;
    }
    quant_quadro.innerText = quant;

})

adicionar.addEventListener('click', () => {

    let nome_prod = nome.value
    if(!nome_prod){
        alert("Nome do produto não pode ser vazio")
        return;
    }
    ul.innerHTML += CriaItem(nome_prod, quant);
    totalq++;
    total.innerText = totalq;
    quant = 1;
    quant_quadro.innerText = quant;
})

const remover = (ele) => {

    const li = ele.parentNode;

    totalq--;
    total.innerText = totalq;

    li.parentNode.remove();
}

const CriaItem = (nome, quant) => {
    return `
    <li>
        <div class="item">
            <p>${nome}. Quantidade: <span>${quant}</span></p>
            <button onclick="remover(this)" id="X">X</button>
        </div>
    </li>
    `
}