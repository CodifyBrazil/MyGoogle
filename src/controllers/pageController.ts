import { Request, Response } from "express";
import Querys from "../models/Querys";


export const home = async (req: Request, res: Response) => {
    let data = 0;
    if (req.params.id !== undefined){
        let id = req.params.id;

        let data = await Querys.find({
            _id: id
        });
        res.render('pages/page', {
            page: 'Page',
            data
        })
    }
    
}