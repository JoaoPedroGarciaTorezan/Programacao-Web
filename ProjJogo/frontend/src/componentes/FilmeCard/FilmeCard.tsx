"use client";

import Link from "next/link";
import { Filme } from "@/tipos/filme"
import '@/componentes/FilmeCard/FilmeCard.css';
import Image from "next/image";

interface FilmeCardProps {
  filme: Filme;
  onDelete: (id: number) => void;
}

export default function FilmeCard({ filme, onDelete}: FilmeCardProps) {

    return (
      <div>
        <Image
          src={filme.imagem}
          alt={filme.titulo}
          width={300}
          height={450}
        />
        <img src="" alt="" />
        <h2>{filme.titulo}</h2>
        <p>{filme.nota}</p> 
        <div>
          <button>Editar</button>
          <button onClick={() => onDelete?.(filme.id)}>Excluir</button>
        </div>
      </div>
    )
  
}