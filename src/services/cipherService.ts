import { AES, SHA256 } from 'crypto-ts'


const secretToMessage = 'secretkeytocripto'


export const encodeMessage = (message: string): string => {
    return AES.encrypt(message, secretToMessage).toString();
}
export const decodeMessage = (messageEncoded: string): string => {
    return AES.decrypt(messageEncoded, secretToMessage).toString()
}
export const encodePassword = (password: string): string => {
    return SHA256(password)
}

export const getUID = (message: string) => {
    const randomNumber = (Math.floor(Math.random() * (999999 - 100000)) + 100000).toString() //random number in [100000,999999]
    const key = SHA256(message).toString().substr(0, 10)  //get first ten symbols from encrypted input message
    return AES.encrypt(randomNumber, key).toString().substr(0, 6)
}


