# Aula-16-nextjs-crud


![Home Page](home-page.png)

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- CSS Modules

## Pré-requisitos

- Node.js
- npm
- Backend da Aula 15 configurado e em execução.

## 1. Configurar o backend

Antes de iniciar o frontend, faça o download do backend da Aula 15:

[Repositório do backend — Aula 15](https://github.com/philcisco-classroom/aula-15-backend)

Siga as instruções do README do backend e configure o servidor para executar na porta **3001**.

A API deverá estar disponível em:

```text
http://localhost:3001
```

Mantenha o backend (Aula-15) em execução enquanto utiliza o frontend.

## 2. Configurar o frontend

Clone este repositório:

```bash
git clone https://github.com/philcisco-classroom/aula-16-nextjs-crud.git
```

Instale as dependências:

```bash
npm install
```

## 3. Configurar a variável de ambiente

Na raiz do projeto frontend, crie um arquivo chamado `.env`.

Informe o endereço da API do backend:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

A variável `NEXT_PUBLIC_API_URL` define o endereço utilizado pelos serviços do frontend para realizar as requisições HTTP à API (ao backend). Lembre-se que a porta do backend foi configurada para 3001


## 4. Executar o frontend

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

http://localhost:3000

Observe que o frontend executa na porta 3000, e o backend na porta 3001.
