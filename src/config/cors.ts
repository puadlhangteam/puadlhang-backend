import { CorsOptions } from 'cors'
import { Forbidden403Error } from '../utils/CustomError'

const allowOrigins = [
  'http://localhost',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://52.63.27.28',
  'https://puadlhang.cleverse.academy',
]
export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Forbidden403Error('Not Allowed By CORS'))
    }
  },
}
