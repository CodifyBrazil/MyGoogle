import {model,Model, Schema, connection} from 'mongoose'; 

type QuerysType = {
    slug: string,
    title: string,
    description: string,
    body: string,
    filters: {}
}

const schema = new Schema<QuerysType>({
    slug: String,
    title: String,
    description: String,
    body: String,
    filters: {}
})

const modelName: string = 'Querys';

export default (connection && connection.models[modelName]) ? 
(connection.models[modelName] as Model<QuerysType>) : 
model<QuerysType>(modelName, schema);