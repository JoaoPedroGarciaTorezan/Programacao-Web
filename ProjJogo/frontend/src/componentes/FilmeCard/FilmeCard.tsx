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
  
}