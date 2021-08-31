"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const creditCardController_1 = require("../controllers/creditCardController");
class CreditCardsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/credit-cards', creditCardController_1.creditCardController.getCreditCards);
        this.router.post('/credit-cards', creditCardController_1.creditCardController.createCreditCard);
    }
}
const creditCardsRoutes = new CreditCardsRoutes();
exports.default = creditCardsRoutes.router;
