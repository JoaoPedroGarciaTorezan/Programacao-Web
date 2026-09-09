const pont = document.querySelector('#pont');
const bj1 = document.querySelector('#j1');
const bj2 = document.querySelector('#j2');
const res = document.querySelector('#rei');
const select = document.querySelector('select');
const placarVit = document.querySelector('select')

let pontj1 = 0;
let pontj2 = 0;
let jogoEncerrado = false;

function VerificaVitoria() {

    let pontVit = Number(placarVit.value)
    if (pontj1 >= pontVit) {
        jogoEncerrado = true;
        bj1.style.backgroundColor = 'green';
        bj2.style.backgroundColor = 'red';
    }
    else if(pontj2 >= pontVit) {
        jogoEncerrado = true;
        bj1.style.backgroundColor = 'red';
        bj2.style.backgroundColor = 'green';
    }
}

function Reiniciar() {
    pontj1 = 0;
    pontj2 = 0;
    pont.innerText = `0 a 0`
    if(jogoEncerrado) {
        jogoEncerrado = false;  
        bj1.style.backgroundColor = 'green';
        bj2.style.backgroundColor = 'blue';
    } 
}

bj1.addEventListener('click', () => {
    if(jogoEncerrado) return;

    pontj1++;
    pont.innerText = `${pontj1} a ${pontj2}`;
    VerificaVitoria();

})

bj2.addEventListener('click', () => {
    if(jogoEncerrado) return;

    pontj2++;
    pont.innerText = `${pontj1} a ${pontj2}`;
    VerificaVitoria();
    
})

res.addEventListener('click', () => {

    Reiniciar();

})

select.addEventListener('change', (e) => {
    let x = Number(e.target.value);
    console.log(x) //Será impresso o valor da <option> selecionada
    Reiniciar();
})

