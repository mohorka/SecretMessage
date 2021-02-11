import mongoose from 'mongoose';

/*interface ISecretMessage {
    message: string,
    password: string,
    _id: string
}
interface ISecretMessageModel extends mongoose.Model<ISecretMessageDoc> {
    build(params: ISecretMessage): ISecretMessageDoc
}
interface ISecretMessageDoc extends mongoose.Document {
    message: string,
    password: string,
    _id: string
}*/

const secretMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        // required: true,

    },
    password: {
        type: String,
        //required: true
    },
    _id: String
})

//export const SecretMessages = mongoose.model<any, ISecretMessageModel>('SecretMessages', secretMessageSchema)
export const SecretMessages = mongoose.model('SecretMessages', secretMessageSchema)
/*secretMessageSchema.statics.build = function (params: ISecretMessage) {
    return new SecretMessages(params)
}*/

