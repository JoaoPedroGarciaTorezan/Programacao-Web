"use client";

import '@/componentes/FilmeForm/FilmeForm.css'
import { useState } from "react";
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

    

    
}