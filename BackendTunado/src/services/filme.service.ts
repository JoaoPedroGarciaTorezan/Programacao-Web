import {prisma} from "../prisma/client"

export class FilmeService{

    async create(data: { titulo: string; imagem: string; nota: number}){

        return prisma.filme.create({
                    data
                });
    }

    //Restam os métodos de atualização (update) leitura (find)
    async delete(id: number){

            return prisma.filme.delete({
                    where: {id},
            });
        }

    async update(data: {titulo: string; imagem: string; nota: number}, id: number){

        return prisma.filme.update({
                    where: {id},
                    data: data
        })
    }
}