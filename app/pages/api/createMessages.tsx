import dbConnect from '../../utils/dbConnection'
import createMessage from '../../lib/createMessage'
import type { NextApiRequest, NextApiResponse } from 'next'
import Error from '../_error'

export default function Details({ answer, statusCode }) {
    if (statusCode == 500) {
        return <Error statusCode={statusCode} />
    }
    return (
        <div>
            <h1>Message::</h1>
            <p>{answer}</p>
        </div>
    )


}

Details.getInitialProps = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect()
    const { password, message } = req.body
    const { statusCode, answer } = await createMessage(password, message)
    return { statusCode, answer }
}