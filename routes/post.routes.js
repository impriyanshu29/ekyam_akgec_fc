import expres from 'express'

import { verifyJWT } from '../middlewares/auth.middlewares.js'
import createpost from '../controllers/createpost.controller.js'
import getpost from '../controllers/getpost.controller.js'
const router = expres.Router()

router.post('/createpost', verifyJWT, createpost)
router.get('/getpost', getpost)
export default router;