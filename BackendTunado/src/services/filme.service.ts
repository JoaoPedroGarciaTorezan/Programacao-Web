import {prisma} from "../prisma/client"

export class FilmeService{

    async create(data: { titulo: string; imagem: string; nota: number}){

        return await prisma.filme.create({
                    data
                });
    }

    //Restam os métodos de atualização (update) leitura (find)
    async delete(id: number){

            return await prisma.filme.delete({
                    where: {id},
            });
        }

    async update(data: {titulo: string; imagem: string; nota: number}, id: number){

        return await prisma.filme.update({
                    where: {id},
                    data: data
        })
    }

    async findbyId(id: number){
        
        return await prisma.filme.findUnique({
                    where: {id},
        })
    }

    async findAll() {

        return await prisma.filme.findMany();
    }
}