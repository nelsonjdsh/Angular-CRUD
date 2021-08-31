import { Request, Response } from "express";
import { connect } from '../database'
import { ICliente } from "../interface/cliente";

export async function readclientes(req: Request, res: Response): Promise<Response> {
    const con = await connect();
    const clientes = await con.query('SELECT * FROM TBL_cliente');
    return res.json(clientes[0]);

}

export async function createcliente(req: Request, res: Response) {
    const newcliente: ICliente = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO TBL_cliente SET ?', [newcliente])
    console.log('Info: ', newcliente)
    return res.json({
        message: 'Cliente Añadido'
    });
}

export async function readcliente(req: Request, res: Response): Promise<Response> {
    const id_cliente = req.params.id_cliente;
    const conn = await connect();
    const cliente = await conn.query('SELECT * FROM TBL_cliente WHERE id_cliente = ?', [id_cliente])
    return res.json(cliente[0]);


}

export async function deleteclienteId(req: Request, res: Response) {
    const id_cliente = req.params.id_cliente;
    const conn = await connect();
    await conn.query('DELETE FROM TBL_cliente WHERE id_cliente = ?', [id_cliente])
    // await conn.query('CHECKIDENT(pais_origen,reseed,0)')
    return res.json({
        message: "Cliente Eliminado"
    });
}

export async function updatecliente(req: Request, res: Response) {
    const id_cliente = req.params.id_cliente;
    const updatecliente: ICliente = req.body;
    const conn = await connect();
    await conn.query('UPDATE TBL_cliente SET ? WHERE id_cliente = ?', [updatecliente, id_cliente])
    console.log('Info: ', updatecliente)
    return res.json({
        message: "Cliente Actualizado"
    });
}
