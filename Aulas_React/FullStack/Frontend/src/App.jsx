import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './componentes/Card'
import Cards from './componentes/Cards'

function App() {

  const [pokemon, setPokemon] = useState();

  const buscar = async () => {
    //Acessar o backend
    //Buscar os pokémon
    //Montar a lista
    const resp = await fetch('http://localhost:3000/buscar');
    const dados = await resp.json();

    const Mapear = dados.map(p => <Card {...p}/>);

    setPokemon(Mapear)//pokemon = Mapear;

  }

  return (
    <>
      <main>
        <h1>Olá React</h1>
        <button onClick={buscar}>Buscar</button>
        <Cards cards={pokemon}/>
      </main>
    </>
  )
}

export default App
