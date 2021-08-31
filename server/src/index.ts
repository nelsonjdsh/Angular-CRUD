import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes'
import morgan from 'morgan';
import cors from 'cors'
import creditCardsRoutes from './routes/creditCardsRoutes'


class Server{
    
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000 || 4300);
        this.app.use(morgan('dev'));
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api', creditCardsRoutes);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on Port', this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();