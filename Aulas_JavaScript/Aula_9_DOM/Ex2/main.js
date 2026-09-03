const ul = document.querySelector('ul');
const nome = document.querySelector('#nome');
const quant = document.querySelector('#quant');
const vaz = document.querySelector('#vazio');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    vaz.remove();

    const newLi = document.createElement('li');
    newLi.innerText = quant.value + " : " + nome.value;

    const newButton = document.createElement('button');
    newButton.innerText = 'X';

    newButton.addEventListener('click', () => {
        newLi.remove();
            
    })

    newLi.append(newButton);

    ul.append(newLi);

})