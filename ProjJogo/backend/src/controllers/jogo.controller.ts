import { JogoService } from "../services/jogo.service";
import { Request, Response } from "express";

const jogoService = new JogoService();

export class JogoController{

    async create(req: Request,res: Response){

        const jogo = await jogoService.create(req.body);

        res.json(jogo);
}
    async update(req: Request,res: Response) {

        const id = Number(req.params.id);

        await jogoService.update(req.body, id);

        res.status(200).send();
    }

    async findAll(req: Request,res: Response){

        const jogos = await jogoService.findAll();

        res.json(jogos);
    }

    async findById(req: Request,res: Response){

        const id = Number(req.params.id);

        const jogo = await jogoService.findbyId(id);

        res.json(jogo);
    }

    //post
    async delete(req: Request,res: Response){

            const id = Number(req.params.id);

            await jogoService.delete(id);

            res.status(204).send();
        }
}