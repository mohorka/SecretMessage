import express from 'express'
import { json } from 'body-parser'
import { messageRouter } from './routes/secretMessageRouter'
import mongoose from 'mongoose'
import { encodeMessage, encodePassword, getUID, decodeMessage } from './services/cipherService'

const PORT = 3000;
const DB_PATH = 'mongodb://127.0.0.1:27017/secretMessage'


const app = express()
app.use(json())
app.use(messageRouter)

mongoose.connect(DB_PATH, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to db')
})

app.listen(PORT, () => {
    console.log('Server is running at 3000')
})