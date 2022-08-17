import { Request, Response } from "express";
import Interests from '../models/Interests';
import Querys from '../models/Querys';


export const home = async (req: Request, res: Response) =>{
    let interests = await Interests.find({});
    let query = await Querys.find({});
    let home = 'Pagina Home';

    console.log(`data: ${query}`);

    console.log(`interesses: ${interests}`);
    res.render('home',{
        home,
        interests,
        query
    });
}