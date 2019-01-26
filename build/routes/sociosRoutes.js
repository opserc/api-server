"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sociosController_1 = __importDefault(require("../controllers/sociosController"));
class SociosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sociosController_1.default.list);
        this.router.post('/', sociosController_1.default.create);
        this.router.put('/:id', sociosController_1.default.update);
        /*
        this.router.get('/:id', sociosController.getOne);
        this.router.post('/', sociosController.create);
        this.router.put('/:id', sociosController.update);
        this.router.delete('/:id', sociosController.delete);*/
    }
}
const sociosRoutes = new SociosRoutes();
exports.default = sociosRoutes.router;
