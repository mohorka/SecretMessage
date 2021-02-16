import express from 'express'
import { getMessage } from '../controllers/getMessage'

const router = express.Router()
router.get('/api/secretmessage', getMessage)
export default router