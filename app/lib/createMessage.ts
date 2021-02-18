import { SecretMessages } from '../models/secretMesssageModel'
import { encodeMessage, encodePassword, getUID } from '../utils/cipher'
import type { NextApiRequest, NextApiResponse } from 'next'

export const postMessage = (req: NextApiRequest, res: NextApiResponse) => {
    const { password, message } = req.body
    const secretmessage = new SecretMessages({
        message: encodeMessage(message),
        password: encodePassword(password),
        _id: getUID(message)
    })

    secretmessage.save((err, savedMessage) => {
        if (err) res.status(500).json(err)
        res.status(201).send(secretmessage._id.toString())
    })




}