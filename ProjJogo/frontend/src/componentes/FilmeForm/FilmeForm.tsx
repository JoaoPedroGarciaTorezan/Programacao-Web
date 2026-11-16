"use client";

import '@/componentes/FilmeForm/FilmeForm.css'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Filme } from "@/tipos/filme";
import {
  createFilmes,
  updateFilme,
} from "@/services/filme.services"


interface Props {
  filme?: Filme;
}

export default function FilmeForm({ filme }: Props) {

    const router = useRouter();
    //Estados internos
    const [titulo, setTitulo] = useState(
      filme?.titulo ?? ""     //se tem titulo, senão é ""
    );
    const [imagem, setImagem] = useState(
      filme?.imagem ?? ""
    );
    const [nota, setNota] = useState(
      filme?.nota ?? 0
    );

    async function handleSubmit(e: React.SyntheticEvent){

        e.preventDefault();


      
        
        const payload = { //JSON
          titulo,
          imagem,
          nota,
        }
        if(filme){
          await updateFilme(filme.id, payload);
        }
        else{
          await createFilmes(payload);
        }
        router.push('/')
        router.refresh();
    }

    return(
      <form onSubmit={handleSubmit} className='filme.form'>
        <h1>
          {filme
            ? "Editar filme"
            : "Novo Filme"
          }
        </h1>
        <div className='form-input'>
          <input 
            type="text"
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)}
            placeholder='Titulo'
          />
        </div>
        <div className='form-input'>
          <input 
            type="text"
            value={imagem} 
            onChange={(e) => setImagem(e.target.value)}
            placeholder='URL da Imagem'
          />
        </div>
        <div className='form-input'>
          <input 
            type="number"
            value={nota} 
            onChange={(e) => setNota(Number(e.target.value))}
            placeholder='0-10'
          />
        </div>
        <button type='submit'>
          Salvar
        </button>
      </form>
    );

    
}