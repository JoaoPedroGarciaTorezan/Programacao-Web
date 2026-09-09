const pont = document.querySelector('#pont');
const bj1 = document.querySelector('#j1');
const bj2 = document.querySelector('#j2');
const res = document.querySelector('#rei');
const select = document.querySelector('#vitoria');
const pont1 = document.querySelector('#pont1');
const pont2 = document.querySelector('#pont2');

let pontj1 = 0;
let pontj2 = 0;
let jogoEncerrado = false;

function AtualizaPontuacao() {
    pont1.innerText = pontj1
    pont2.innerText = pontj2
}

function VerificaVitoria() {

    let pontVit = Number(select.value)
    if (pontj1 >= pontVit) {
        jogoEncerrado = true;
        pont1.style.color = 'green';
        pont2.style.color = 'red';
    }
    else if(pontj2 >= pontVit) {
        jogoEncerrado = true;
        pont1.style.color = 'red';
        pont2.style.color = 'green';
    }
}

function Reiniciar() {
    pontj1 = 0;
    pontj2 = 0;
    AtualizaPontuacao(pontj1,pontj2);
    if(jogoEncerrado) {
        jogoEncerrado = false;
        pont1.style.color = 'black';
        pont2.style.color = 'black';
    } 
}

bj1.addEventListener('click', () => {
    if(jogoEncerrado) return;

    pontj1++;
    AtualizaPontuacao();
    VerificaVitoria();

})

bj2.addEventListener('click', () => {
    if(jogoEncerrado) return;

    pontj2++;
    AtualizaPontuacao();
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