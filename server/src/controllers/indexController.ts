import { Response, Request } from "express";

class  IndexController {
    public index ( req: Request, res: Response) {
        res.json({
            message: "test"
        })
    }
}

export const indexController = new IndexController();