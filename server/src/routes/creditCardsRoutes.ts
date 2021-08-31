import { Router } from 'express'
import {creditCardController} from '../controllers/creditCardController'

class CreditCardsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/credit-cards', creditCardController.getCreditCards);
        this.router.post('/credit-cards', creditCardController.createCreditCard)
    }

}
const creditCardsRoutes = new CreditCardsRoutes();
export default creditCardsRoutes.router;