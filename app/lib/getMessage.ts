import { SecretMessages } from '../models/secretMesssageModel'
import { encodePassword, decodeMessage } from '../utils/cipher'
import type { NextApiRequest, NextApiResponse } from 'next'

export const getMessage = (req: NextApiRequest, res: NextApiResponse) => {
    const { password, uid } = req.body
    const secretMessage = SecretMessages.findOne({ _id: uid })
    secretMessage.exec((err, message) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            if (message) {
                if (message.get('password', String) == encodePassword(password)) {
                    return res.status(200).json(decodeMessage(message.get('message', String)))
                }
                else {
                    return res.status(403).json('oops, wrong password')
                }
            }
            else {
                return res.status(404).json('no message with this id')
            }
        }
    })
}