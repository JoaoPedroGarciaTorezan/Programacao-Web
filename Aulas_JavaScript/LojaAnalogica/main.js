const cardsContainer = document.querySelector('.cards-container');
const btnBuscar = document.querySelector('#btn-buscar');
const busca = document.querySelector('#buscar');

btnBuscar.addEventListener('click', async () => {
    
    limparCards();
    const dados = await fetch('db/produtos.json');
    const json = await dados.json();
    
    const produtoBuscado = busca.value;
    
    json.forEach(c => {
        if(c.qtd.includes(produtoBuscado))
        {
            const card = gerarCard(c.img, c.nome, c.preco, c.qtd);
            cardsContainer.innerHTML += card;
        }
    });
});


const gerarCard = (img, nome, preco,qtd) => { 
    return `
    <div class="card">
        <img src=${img} alt="">
        <p class="card-nome">${nome}</p>
        <p class="card-preco">R$ ${preco}</p>
        <p class="card-descricao">${svgPecaQC} ${qtd}</p>
    <button>Comprar</button>
    `
}

const svgPecaQC = `<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path d="M9 3C9 2 10 1 12 1C14 1 15 2 15 3C15 4 14 5 15 6H19C20 6 21 7 21 8V11C22 10 23 11 23 12C23 
                                14 22 15 20 15C19 15 19 14 19 14V18C19 19 18 20 17 20H14C15 21 14 23 12 23C10 23 9 21 10 20H7C6 20 5 19 5 
                                18V15C4 16 1 15 1 12C1 10 4 9 5 10V7C5 6 6 5 7 5H10C9 4 9 4 9 3Z"/>
                </svg>`

const limparCards = () => {
    const cards = cardsContainer.querySelectorAll('.card');
    cards.forEach(c => c.remove());
}