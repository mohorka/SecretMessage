import { SecretMessages } from '../models/secretMesssageModel'
import { encodeMessage, encodePassword, getUID } from '../utils/cipher'


export default async function createMessage(password: string, message: string): Promise<ICreateMessageResult> {
    const secretmessage = new SecretMessages({
        message: encodeMessage(message),
        password: encodePassword(password),
        _id: getUID(message)
    })

    try {
        const savedMessage = await secretmessage.save()
        return {
            statusCode: 201,
            answer: 'created! You uid is ' + savedMessage.get('_id', String)
        }
    } catch (err) {
        return {
            statusCode: 500,
            answer: err.toString()
        }

    }

}

interface ICreateMessageResult {
    statusCode: number,
    answer: string
}