import express from 'express'
import { getMessage } from '../controllers/getMessage'
import { postMessage } from '../controllers/postMessage'

export const messageRouter = express.Router()
messageRouter.get('/api/secretmessage', getMessage)
messageRouter.post('/api/secretmessage', postMessage)

/*messageRouter.get('/api/secretmessage', [], async (req: Request, res: Response) => {
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
})*/