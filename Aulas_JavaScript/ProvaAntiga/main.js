const input = document.querySelector('input')
const add = document.querySelector('#botao')
const ul = document.querySelector("ul");

let quant=0;

add.addEventListener('click', () => {

    const nome = input.value;
    if(!nome) {
        alert("Nome do produto não pode ser vazio.")
        return;
    }
    
    const item = addItem(nome, quant)
    ul.innerHTML += item;
    
})

const inc = (ele) => {

    const li = ele.parentNode;
    const quantidade = li.querySelector('span')
    const soma = li.querySelector('.mais');

    let item_quant = Number(quantidade.textContent)
    item_quant++;
    quantidade.innerText = item_quant;
}

const dec = (ele) => {

    const li = ele.parentNode;
    const quantidade = li.querySelector('span')
    const menos = li.querySelector('.mais');

    let item_quant = Number(quantidade.textContent)
    item_quant--;

    if(item_quant <= 0)
        li.remove();
    else
        quantidade.innerText = item_quant;
}

const addItem = (nome, quant) => {
    quant++;
    return `
        <li><p>${nome}. Quantidade <span>${quant}</span></p>
            <button onclick="inc(this)" class="mais">+</button>
            <button onclick="dec(this)" class="menos">-</button>
        </li>
    `
}
