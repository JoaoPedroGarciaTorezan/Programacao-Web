import {prisma} from "../prisma/client"

export class JogoService{

    async create(data: { titulo: string; imagem: string; nota: number}){

        return await prisma.jogo.create({
                    data
                });
    }

    //Restam os métodos de atualização (update) leitura (find)
    async delete(id: number){

            return await prisma.jogo.delete({
                    where: {id},
            });
        }

    async update(data: {titulo: string; imagem: string; nota: number}, id: number){

        return await prisma.jogo.update({
                    where: {id},
                    data: data
        })
    }

    async findbyId(id: number){
        
        return await prisma.jogo.findUnique({
                    where: {id},
        })
    }

    async findAll() {

        return await prisma.jogo.findMany();
    }
}