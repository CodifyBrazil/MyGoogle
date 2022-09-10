import {Request, Response} from 'express';
import Query from '../models/Querys';
import Historic from '../models/Historic';
import Interests from '../models/Interests';


export const query = async (req: Request, res: Response) =>{
    let date_now = new Date();

    let search = req.query.query;

    let page = parseInt(req.query.p as string);
    let limit: number = 10;

    if(page === 1){
        var per_page = 0;
    }
    else{
        var per_page: number = page * 10;
    }
    
    // query content for page/results
    let query_search = await Query.find({
        $or: [
            {title: {$regex: '.*' + search + '.*'}},
            {slug: {$regex: '.*' + search + '.*'}}
        ]}).skip(per_page).limit(limit);

    // salve historic query_search
    await Historic.create({
        query: search,
        date_search: new Date() 
    })

    let interests = await Interests.find({
        limit: 8
    });

    res.render('pages/results', {
        search,
        query_search,
        interests,
        date_now
    })
}