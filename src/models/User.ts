import {model,Model, Schema, connection} from 'mongoose'; 

type UserType = {
    name: string,
    lastname: string,
    email: string,
    uriImage: string
}

const schema = new Schema<UserType>({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    uriImage: String
})

const modelName: string = 'User';

export default (connection && connection.models[modelName]) ? 
(connection.models[modelName] as Model<UserType>) : 
model<UserType>(modelName, schema);