import { Router } from 'express';
import FotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// foto eh o nome do campo ao enviar o formadata
router.post('/', loginRequired, FotoController.store);

export default router;
