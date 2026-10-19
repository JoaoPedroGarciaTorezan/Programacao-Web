const body = document.querySelector('body');


const bt = document.querySelector('button');

bt.addEventListener('click', async () => {
    const resposta = await fetch('http://localhost:3000/buscar/id/67');

    const poke = await resposta.json();

    const newImg = document.createElement('img');

    newImg.src = poke.imagem;

    body.append(newImg);
})  