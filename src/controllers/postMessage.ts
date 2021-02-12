import { Request, Response } from 'express'
import { SecretMessages } from '../models/secretMessageModel'
import { encodeMessage, encodePassword, getUID, decodeMessage } from '../services/cipherService'

export async function postMessage(req: Request, res: Response) {
    const { password, message } = req.body
    const secretmessage = new SecretMessages({
        message: encodeMessage(message),
        password: encodePassword(password),
        _id: getUID(message)
    })
    secretmessage.save()
        .then(() => {
            res.status(201).send(secretmessage._id.toSring())
        })
        .catch(err => {
            res.status(500).json(err)
        })

}