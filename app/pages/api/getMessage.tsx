import dbConnect from '../../utils/dbConnection'
import getMessage from '../../lib/getMessage'
import type { NextApiRequest, NextApiResponse } from 'next'
import Error from '../_error'




export default function Details({ message, statusCode }) {
    if (statusCode == 403) {
        return <Error statusCode={statusCode} />
    }
    if (statusCode == 404) {
        return <Error statusCode={statusCode} />
    }
    if (statusCode == 500) {
        return <Error statusCode={statusCode} />
    }

    return (
        <div>
            <h1>Message:</h1>
            <p>{message}</p>
        </div>
    )


}

Details.getInitialProps = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect()
    const { uid, password } = req.body
    const { statusCode, message } = await getMessage(uid, password)
    if (statusCode == 404) {
        res.statusCode = 404
    }
    return {
        message: message,
        statusCode: statusCode
    }


}