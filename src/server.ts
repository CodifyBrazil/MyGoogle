import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';
import body_parse from 'body-parser';
import fs from 'fs';

import {mongoConnect} from './database/mongo';
import mainRouter from './routers/index';

dotenv.config();

mongoConnect();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.use(mainRouter);

app.use((req: Request, res: Response) => {
    res.status(404).send('Pagina nao encontrada :(');
});

app.listen(process.env.PORT);