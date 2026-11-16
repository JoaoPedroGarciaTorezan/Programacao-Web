import {Filme, CreateFilmeDTO, UpdateFilmeDTO} from "@/tipos/filme";
import { Puritan } from "next/font/google";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;


//Exemplo já implementado
export async function getFilmes(): Promise<Filme[]>
{
    const response = await fetch(`${API_URL}/filmes`);
    const dados = await response.json();
    return dados;

}

export async function getFilme(id: string): Promise<Filme> {

    const response = await fetch(`${API_URL}/filmes/${id}`);
    return await response.json();
}

export async function createFilmes(filme: CreateFilmeDTO): Promise<void>
{
    const response = await fetch(`${API_URL}/filmes`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filme),
    });

    if(!response.ok){
      throw new Error("Deu ruim na criação");
    }
}


export async function updateFilme(id: number, filme: UpdateFilmeDTO): Promise<void>
{
    const response = await fetch(`${API_URL}/filmes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filme),
    });

    if(!response){
      throw new Error("Deu ruim na atualização");
    }

}

export async function deleteFilme(id: number): Promise<void>
{
    const response = await fetch(`${API_URL}/filmes/${id}`, {
        method: "DELETE",
    });
}