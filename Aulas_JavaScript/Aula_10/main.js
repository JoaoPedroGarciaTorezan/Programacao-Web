const button = document.querySelector('button')
const ul = document.querySelector('ul');
const api = 'https://pokeapi.co/api/v2/pokemon/';

const numPokemon = 12;

button.addEventListener('click', () => {

    BuscaPokemon();

})

const BuscaPokemon = async () => {

    LimpaPokemon();
    let index;
    for(let i = 0; i < numPokemon; i++){

        index = Math.trunc(Math.random()*256) + 1;
        const result = await fetch(` ${api}${index}`);
        const data = await result.json();
        const newCard = CardPokemon(data.name, data.sprites.front_default)
        console.log(newCard)

        ul.innerHTML += newCard;
        
    }

    const newCard = CardPokemon(data.name, data.sprites.front_default)
    console.log(newCard)

    ul.innerHTML += newCard;

}

const CardPokemon = (nome, imagem) => {

    return `
    <div>
        <p>${nome}</p>
        <img src="${imagem}" alt="${nome}">
    </div>
    `
}

const LimpaPokemon = () => {
    const cards = ul.querySelectorAll('div');

    cards.forEach(c => c.remove());

    
}