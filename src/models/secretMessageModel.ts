import mongoose from 'mongoose';

const secretMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    _id: String
})

export const SecretMessages = mongoose.model('SecretMessages', secretMessageSchema)

