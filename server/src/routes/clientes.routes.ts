import { Router } from "express";
import { defaultMaxListeners } from "mysql2/typings/mysql/lib/Pool";
import { readclientes, createcliente, readcliente, deleteclienteId, updatecliente } from "../controllers/clientes.controllers";

const router = Router();

router.route('/')
    .get(readclientes)
    .post(createcliente)

router.route('/:id_cliente')
    .get(readcliente)
    .delete(deleteclienteId)
    .put(updatecliente)


export default router;
