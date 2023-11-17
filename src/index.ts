import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import { PORT } from './config/const'
import { corsOption } from './config/cors'

const app = express()

// Middleware
app.use(express.json())
app.use(cors(corsOption))

// Routes

// Error Middleware

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))
