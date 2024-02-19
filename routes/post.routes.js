import expres from 'express'

import { verifyJWT } from '../middlewares/auth.middlewares.js'
import createpost from '../controllers/createpost.controller.js'

const router = expres.Router()

router.post('/createpost', verifyJWT, createpost)

export default router;