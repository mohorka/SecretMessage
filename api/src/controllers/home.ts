import { Request, Response } from 'express'

const getHome = (req: Request, res: Response) => {
    res.send('hello')
}

export default getHome