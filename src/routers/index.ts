import { Router } from "express";
import * as homeController from '../controllers/homeController';
import * as queryController from '../controllers/queryController';
import * as newdataController from '../controllers/newdataController';
import * as pageController from '../controllers/pageController';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', homeController.home);

router.get('/q', queryController.query);

router.get('/newdata', newdataController.home);
router.post('/newdata', newdataController.home);

router.get('/page/:id', pageController.home);

router.get('/user', userController.home);

export default router;