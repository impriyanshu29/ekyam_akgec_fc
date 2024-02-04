import express from 'express'
import userRouter from '../routes/user.routes.js'
import authRouter from '../routes/auth.routes.js'
import cookieParser from 'cookie-parser'


const app = express()

app.use(express.json())
app.use(cookieParser());
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
export default app


























































































































// app.use(): This is like telling your server, "Hey, when you get a request, make sure to run some code before sending a response."
// "/api/auth": Imagine this as a specific area in your website. If someone tries to go to any address that starts with /api/auth, we want to do something special.
// authRouter: Think of this like a set of instructions. When someone goes to a URL starting with /api/auth, follow these instructions to handle their request.