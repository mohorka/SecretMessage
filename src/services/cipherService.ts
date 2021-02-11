import { AES, MD5, enc } from 'crypto-js'


const secretToMessage = 'secretkeytocripto'
const salt = 'salt'


export const encodeMessage = (message: string): string => {
    return AES.encrypt(message, secretToMessage).toString()
}
export const decodeMessage = (messageEncoded: string): string => {
    const bytes = AES.decrypt(messageEncoded.toString(), secretToMessage)
    return bytes.toString(enc.Utf8)
}
export const encodePassword = (password: string): string => {
    const passwordWithSalt = password.concat(salt)
    return MD5(passwordWithSalt).toString()
}

export const getUID = (message: string) => {
    const saltStr = Math.random().toString(36).substr(2, 5)
    return MD5(message.concat(saltStr)).toString().substr(0, 6)

}


