import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import { PORT, corsOptions } from './config'
import authMiddleware from './middlewares/Auth'
import errorHandlerMiddleware from './middlewares/ErrorHandler'
import redirectMiddleware from './middlewares/Redirect'
import adminRouter from './routes/Admin'
import solutionRouter from './routes/Solution'
import userRouter from './routes/User'

const app = express()

// Middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(authMiddleware.decode)

// Routes
app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/solutions', solutionRouter)

// Error Middleware
app.use('*', redirectMiddleware.defaultResponse)
app.use(errorHandlerMiddleware.httpErrorHandler)

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))
