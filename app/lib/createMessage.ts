import {SecretMessages} from '../models/secretMessageModel'
import { encodeMessage, encodePassword, getUID } from '../utils/cipher'

export const postMessage = (req, res) => {
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