import {model, Model, connection, Schema} from 'mongoose';

type HistoricType = {
    query: string,
    date_search: Date
}

const schema = new Schema<HistoricType>({
    query: {type: String, require: true},
    date_search: {type: Date, required: true}
})

const modelName = 'Historic';

export default (connection && connection.models[modelName])?
(connection.models[modelName] as Model<HistoricType>):
model<HistoricType>(modelName, schema);