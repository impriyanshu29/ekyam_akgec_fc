import expres from 'express'

import { verifyJWT } from '../middlewares/auth.middlewares.js'
import createpost from '../controllers/createpost.controller.js'
import getpost from '../controllers/getpost.controller.js'
import deletePost from '../controllers/deletePost.controller.js'
const router = expres.Router()

router.post('/createpost', verifyJWT, createpost)
router.get('/getpost', getpost)
router.delete('/deletePost/:postId/:userId',verifyJWT,deletePost)
export default router;