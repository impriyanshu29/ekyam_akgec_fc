import {Router} from 'express'
import {createAlumin} from '../controllers/alumni.controller.js'
import { verifyJWT } from '../middlewares/auth.middlewares.js'
import { getAlumni , deleteAlumni } from '../controllers/alumni.controller.js'
const router = Router()

router.post('/createalumni', verifyJWT, createAlumin)
router.get('/getalumni', verifyJWT, getAlumni)
router.delete('/deletealumni/:userId/:alumniId',verifyJWT, deleteAlumni)


export default router;