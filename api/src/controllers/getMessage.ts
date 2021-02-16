import { Request, Response } from 'express'
import { SecretMessages } from '../models/secretMessageModel'
import { encodeMessage, encodePassword, decodeMessage } from '../services/cipherService'

export async function getMessage(req: Request, res: Response) {
    const { password, uid } = req.body
    try {
        const secretMessage = await SecretMessages.findOne({ _id: uid, password: encodePassword(password) })
        if (secretMessage) {
            return res.status(200).json(decodeMessage(secretMessage.get('message', String)))
        }
        else {
            return res.status(404).json('no message with this id')
        }
    }
    catch (err) {
        return res.status(500).json(err)
    }

}