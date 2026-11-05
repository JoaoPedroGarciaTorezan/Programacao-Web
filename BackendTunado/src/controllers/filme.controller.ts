import { FilmeService } from "../services/filme.service";
import { Request, Response } from "express";

const filmeService = new FilmeService();

export class FilmeController{

    async create(req: Request,res: Response){

        const filme = await filmeService.create(req.body);

        res.status(201).json(filme);
}
    async update(req: Request,res: Response) {

        const id = Number(req.params.id);

        await filmeService.update(req.body, id);

        res.status(200).send();
    }

// findAll(req: Request,res: Response)

// findById(req: Request,res: Response)

    //post
    async delete(req: Request,res: Response){

            const id = Number(req.params.id);

            await filmeService.delete(id);

            res.status(204).send();
        }
}