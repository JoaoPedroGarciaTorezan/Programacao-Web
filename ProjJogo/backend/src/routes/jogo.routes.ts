import { JogoController } from "../controllers/jogo.controller";
import {Router} from "express";

const router = Router();
const jogoController = new JogoController();

router.post('/', jogoController.create);
router.delete('/:id', jogoController.delete);
router.get('/', jogoController.findAll);
router.get('/:id',jogoController.findById);
router.put('/:id',jogoController.update);

export {router as jogoRoutes}

