import { AES, MD5, enc } from 'crypto-js'


const secretToMessage = 'secretkey'
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
    const randomNumber = (Math.floor(Math.random() * (999999 - 100000)) + 100000).toString() //random number in [100000,999999]
    const key = MD5(message).toString().substr(0, 10)  //get first ten symbols from encrypted input message
    return AES.encrypt(randomNumber, key).toString().substr(0, 6)
}


