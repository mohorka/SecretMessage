import express from 'express'
import path from 'path'
import { json } from 'body-parser'
import { messageRouter } from './routes/secretMessageRouter'
import mongoose, { get } from 'mongoose'


const PORT = process.env.PORT || 3000;
const DB_PATH = 'mongodb://127.0.0.1:27017/secretMessage'


const app = express()
app.use(json())
app.use(messageRouter)
app.use(express.static(__dirname + '/statics'))

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/statics/index.html'))

})

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