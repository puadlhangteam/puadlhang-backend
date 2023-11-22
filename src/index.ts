import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import { PORT } from './config/const'
import { corsOption } from './config/cors'
import authMiddleware from './middlewares/Auth'
import errorHandlerMiddleware from './middlewares/ErrorHandler'
import adminRouter from './routes/Admin'
import userRouter from './routes/User'

const app = express()

// Middleware
app.use(express.json())
app.use(cors(corsOption))
app.use(authMiddleware.decode)

// Routes
app.use('/user', userRouter)
app.use('/admin', adminRouter)

// Error Middleware
app.use(errorHandlerMiddleware.httpErrorHandler)

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))
