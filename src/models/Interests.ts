import {model,Model, Schema, connection} from 'mongoose'; 

type InterestsType = {
    name: [string]
}

const schema = new Schema<InterestsType>({
    name: [String]
})

const modelName: string = 'Interests';

export default (connection && connection.models[modelName]) ? 
(connection.models[modelName] as Model<InterestsType>) : 
model<InterestsType>(modelName, schema);