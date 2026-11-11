"use client";

import { useRouter } from "next/navigation";
import { Filme } from "@/tipos/filme";

import { deleteFilme } from "@/services/filme.services";
import FilmeCard from "../FilmeCard/FilmeCard";
import '@/componentes/FilmesGrid/FilmeGrid.css'

interface Props {
  filmes: Filme[];
}

export default function FilmeGrid({ filmes }: Props) {

  
}