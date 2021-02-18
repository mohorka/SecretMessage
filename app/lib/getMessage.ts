import {SecretMessages} from '../models/secretMessageModel'
import { encodePassword, decodeMessage} from '../utils/cipher'

export const getMessage = (req: Request, res: Response) => {
    const { password, uid } = req.body
    const secretMessage = SecretMessages.findOne({ _id: uid, password: encodePassword(password) })
    secretMessage.exec((err, message) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            if (message) {
                return res.status(200).json(decodeMessage(message.get('message', String)))
            }
            else {
                return res.status(404).json('no message with this id')
            }
        }
    })
}