import {Router} from 'express'
import {registerUser,updateUser} from "../controllers/user.controller.js"
import { verifyJWT } from '../middlewares/auth.middlewares.js';
const router = Router();


router.get("/test",registerUser)
router.post("/update/:userId",verifyJWT, updateUser)

export default router;