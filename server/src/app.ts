import express, { Application, urlencoded } from "express";
import morgan from 'morgan';
import clientesRoutes from "./routes/clientes.routes";


export class App {
    app: Application

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();

    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/clientes', clientesRoutes)
    }

    async listen() {
        await this.app.listen(3000);
        console.log('Server running on port 3000');
    }

}