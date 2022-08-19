import { Request, Response } from "express";
import Interests from '../models/Interests';
import Querys from '../models/Querys';


export const home = async (req: Request, res: Response) =>{
    let interests = await Interests.find({});
    let query = await Querys.find({});
    let home = 'Pagina Home';

    res.render('pages/home',{
        home,
        interests,
        query,
    });
}
