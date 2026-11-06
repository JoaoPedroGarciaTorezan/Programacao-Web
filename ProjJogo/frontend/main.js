const url = 'http://localhost:3001/jogos';

const btn1 = document.querySelector('#enviar');
const btn2 = document.querySelector('#apagar');
const btn3 = document.querySelector('#atualizar');
const input = document.querySelector('#id-delete');

//update
const inputTitulo = document.querySelector('#titulo');
const inputNota = document.querySelector('#nota');
const inputId = document.querySelector('#id');


btn1.addEventListener('click', async () => {
    console.log('aaab');

    const dados = {
        titulo: inputTitulo.value,
        nota: Number(inputNota.value),
        imagem: "https://www.themoviedb.org/t/p/w600_and_h900_face/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg"
    }

    //usando fetch para post no endpoint /jogos.
    await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", // Irá enviar JSON
      },
      body: JSON.stringify(dados) //convertendo os dados para JSON em formato string
    });

});

btn2.addEventListener('click', async () => {

    const id = Number(input.value);

    //usando fetch para delete no endpoint /jogos/id.
    await fetch(`${url}/${id}`, {
      method: "DELETE", 
    });

});


btn3.addEventListener('click', async () => {
    const id = inputId.value;
    const dados = {
        titulo: inputTitulo.value,
        nota: Number(inputNota.value),
    }
    await fetch(`${url}/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json", // Irá enviar JSON
      },
      body: JSON.stringify(dados) //convertendo os dados para JSON em formato string
    });

});
