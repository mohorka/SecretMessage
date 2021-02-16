import express from 'express'
import { postMessage } from '../controllers/postMessage'

const router = express.Router()

router.post('/api/secretmessage', postMessage)
export default router