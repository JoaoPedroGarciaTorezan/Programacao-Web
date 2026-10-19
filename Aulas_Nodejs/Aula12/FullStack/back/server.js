const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log('Servidor Ligado')
})

//Rota para buscar pokemon
app.get('/buscar', (req,res) => {

    //Acessa a base de dados
    const dados = fs.readFileSync('db/pokemon.json', 'utf-8');
    const pokemon = JSON.parse(dados);
    //devolver os pokémons
    console.log(pokemon);
    res.json(pokemon);

})

app.get('/buscar/id/:id', (req, res) => {

    //extrair parametro
    const {id} = req.params; //const tipo = req.params.tipo
    //Acessar a base de dados
    const dados = fs.readFileSync('db/pokemon.json', 'utf-8');
    const pokemon = JSON.parse(dados);

    // const resposta = [];
    // for(let i=0; i < pokemon.length; i++) {

    //     if(pokemon[i].tipos.includes(tipo)){
    //         //adicionar ao vetor temporario
    //         resposta.push(pokemon[i]);
    //     }
    // }

    const resposta = pokemon.find(p => p.id == id);

    res.json(resposta);


})

app.get('/buscar/:tipo', (req, res) => {

    //extrair parametro
    const {tipo} = req.params; //const tipo = req.params.tipo
    //Acessar a base de dados
    const dados = fs.readFileSync('db/pokemon.json', 'utf-8');
    const pokemon = JSON.parse(dados);

    // const resposta = [];
    // for(let i=0; i < pokemon.length; i++) {

    //     if(pokemon[i].tipos.includes(tipo)){
    //         //adicionar ao vetor temporario
    //         resposta.push(pokemon[i]);
    //     }
    // }

    const resposta = pokemon.filter(p => p.tipo.includes(tipo));

    res.json(resposta);


})