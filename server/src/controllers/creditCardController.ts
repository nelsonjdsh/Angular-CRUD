import { Response, Request } from "express";

import pool from '../database'

class CreditCardController {

    public async getCreditCards ( req: Request, res: Response) {
        try {
            const creditCards = await pool.query('SELECT * FROM Credit_Cards');
            res.json(creditCards)
            
        } catch (error) {
            throw new Error(error)
        }
    }

    public async createCreditCard(req: Request, res: Response) {
            console.log([req.body])
            await pool.query('INSERT INTO credit_card set ? ', [req.body])
            if(!req.body){
                res.json({Response: 'CreditCard Null'})
            }
            res.json({Response: 'CreditCard Created'})

    }
}
export const creditCardController = new CreditCardController();