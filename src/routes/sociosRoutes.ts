import { Router } from 'express';
import sociosController from '../controllers/sociosController';

class SociosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', sociosController.list);
        this.router.post('/', sociosController.create);
        this.router.put('/:id', sociosController.update);
        /*
        this.router.get('/:id', sociosController.getOne);
        this.router.post('/', sociosController.create);
        this.router.put('/:id', sociosController.update);
        this.router.delete('/:id', sociosController.delete);*/
    }
}

const sociosRoutes = new SociosRoutes();
export default sociosRoutes.router;