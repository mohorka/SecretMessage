import { SecretMessages } from '../models/secretMesssageModel'
import { encodePassword, decodeMessage } from '../utils/cipher'



export default async function getMessage(uid: string, password: string): Promise<IGetMessageResult> {
    try {
        const secretMessage = await SecretMessages.findOne({ _id: uid })
        if (secretMessage) {
            if (secretMessage.get('password', String) == encodePassword(password)) {
                return {
                    statusCode: 200,
                    message: decodeMessage(secretMessage.get('message', String))
                }
            }
            else return {
                statusCode: 403,
                message: 'oops, wrong password'
            }
        } else return {
            statusCode: 404,
            message: 'no message with this id'
        }
    }
    catch (err) {
        return {
            statusCode: 500,
            message: err.toString()
        }
    }
    /*secretMessage.exec((err, message) => {
        if (err) {
            res.status(500).json(err)
           
        }
        else {
            if (message) {
                if (message.get('password', String) == encodePassword(password)) {
                    res.status(200).json(decodeMessage(message.get('message', String)))  
                }
                else res.status(403).json('oops, wrong password') 
                
            }
            else res.status(404).json('no message with this id')  
            
        }*/

}


interface IGetMessageResult {
    statusCode: number,
    message: string
}
