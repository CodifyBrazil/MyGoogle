import { Router } from "express";
import * as homeController from '../controllers/homeController';
import * as queryController from '../controllers/queryController';

const router = Router();

router.get('/', homeController.home);

router.get('/q', queryController.query);

export default router;