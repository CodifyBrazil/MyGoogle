import { Router } from "express";
import * as homeController from '../controllers/homeController';
import * as queryController from '../controllers/queryController';
import * as newdataController from '../controllers/newdataController';
import * as pageController from '../controllers/pageController';

const router = Router();

router.get('/', homeController.home);

router.get('/q', queryController.query);

router.get('/newdata', newdataController.home);
router.post('/newdata', newdataController.home);

router.get('/page/:id', pageController.home);

export default router;