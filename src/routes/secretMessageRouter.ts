import express, { Request, Response } from 'express'
import { SecretMessages } from '../models/secretMessageModel'
import { encodeMessage, encodePassword, getUID, decodeMessage } from '../services/cipherService'
export const messageRouter = express.Router()

messageRouter.get('/api/secretmessage', [], async (req: Request, res: Response) => {
    const { password, uid } = req.body
    const secretmessage = await SecretMessages.findOne({ _id: uid, password: encodePassword(password) })
    if (secretmessage == null) {
        return res.status(404).send('Message is not found')
    }
    else {
        return res.status(200).send(decodeMessage(secretmessage.get('message', String)))
    }
})

messageRouter.post('/api/secretmessage', async (req: Request, res: Response) => {
    const { password, message } = req.body
    try {
        /*const secretmessage =  SecretMessages.build({
            message: encodeMessage(message),
            password: encodePassword(password),
            _id: getUID(message)
        })*/
        const secretmessage = new SecretMessages({
            message: encodeMessage(message),
            password: encodePassword(password),
            _id: getUID(message)
        })
        await secretmessage.save()
        return res.status(201).send(secretmessage._id.toString())
    }
    catch (e) {
        console.log(e)
    }
})