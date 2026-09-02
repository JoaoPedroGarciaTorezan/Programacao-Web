const ul = document.querySelector('ul');
const nome = document.querySelector('#nome');
const quant = document.querySelector('#quant');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    const newLi = document.createElement('li');
    newLi.innerText = quant.value;
    newLi.innerText = ':';
    newLi.innerText = nome.value;

    const newButton = document.createElement('button');
    newButton.innerText = 'X';

    newButton.addEventListener('click', () => {
        newLi.remove();
    })

    newLi.append(newButton);

    ul.append(newLi);

})