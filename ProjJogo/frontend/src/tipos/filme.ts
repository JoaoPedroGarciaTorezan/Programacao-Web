export interface Filme {
    id: number;
    titulo: string;
    imagem: string;
    nota: number;
}

export interface CreateFilmeDTO  {
    titulo: string;
    imagem: string;
    nota: number;
}

export interface UpdateFilmeDTO  {
    titulo?: string; //campos opcionais com ?
    imagem?: string;
    nota?: number;
}