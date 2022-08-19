import {Request, Response} from 'express';
import dotenv from 'dotenv';

import Query from '../models/Querys';
import { check_content } from '../helpers/check_content';

export const home = async (req: Request, res: Response) => {
    
    if(check_content(req.body)){
        let title = req.body.title_conteudo;
        let body = req.body.body_conteudo
        let slug = title.replace(' ','-').replace('%20', '-').toLowerCase();
        let filters = {
            "nodejs":["connection", "mongoDb"]
        }
        let date_search = new Date();
        let token_easyImage = process.env.TOKEN_CKEDITOR_EASYIMAGE;

        await Query.create({
            slug,
            title,
            description: body,
            filters,
            token_easyImage
        });     
    
        res.redirect(`http://localhost:3000/q?query=${title}&date_search=${date_search}&p=1`);
    }



    res.render('pages/newData',{
        
    });
}