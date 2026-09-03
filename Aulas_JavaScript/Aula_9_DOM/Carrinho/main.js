const inputDesc = document.querySelector('#descricao');
const inputPreco = document.querySelector('#preco');
const btnAdd = document.querySelector('#btn-add');
const divCarrinho = document.querySelector('.carrinho');

const figs = ["figuras/berserk.jpg", "figuras/pokemon-cards.jpg"];
const figExcluir = "figuras/lixeira.png";

btnAdd.addEventListener('click', () => {

    criarCard(inputDesc.value, inputPreco.value);

});

const criarCard = (descricao, preco) => {

    const newCardDiv = document.createElement('div');
    newCardDiv.classList.add('item');

    const newImgProduto = document.createElement('img');
    newImgProduto.id = "img-produto";
    newImgProduto.src = figs[Math.trunc(Math.random()*figs.length)];

    const newPDescricao = document.createElement('p');
    newPDescricao.innerText = descricao;

    const newImgExcluir = document.createElement('img');
    newImgExcluir.id = "img-excluir";
    newImgExcluir.src = figExcluir;

    const newButton = document.createElement('button');
    newButton.append(newImgExcluir);
    newButton.addEventListener('click',removerCard);

    const newPPreco = document.createElement('p');
    newPPreco.innerText = `R$ ${Number(preco).toFixed(2)}`;

    newCardDiv.append(newImgProduto);
    newCardDiv.append(newPDescricao);
    newCardDiv.append(newButton);
    newCardDiv.append(newPPreco);
    
    divCarrinho.append(newCardDiv);

}

const removerCard = (e) => {
    e.target.parentNode.remove();
}