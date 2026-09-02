//Buscar as referências
const main = document.querySelector('main')
const span = document.querySelector('span')
const btn = document.querySelector('button')

const geraCorAleatoria = () => {

    const novaCor = {
        r: Math.trunc(Math.random()*256),
        g: Math.trunc(Math.random()*256),
        b: Math.trunc(Math.random()*256)
    }

    return novaCor;

}

btn.addEventListener('click', () => {

    const novaCor = geraCorAleatoria();
    main.style.backgroundColor = `rgb(${novaCor.r},${novaCor.g},${novaCor.b})`; 
    
    span.innerText = `rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;

}); 