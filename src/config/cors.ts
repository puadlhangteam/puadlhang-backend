import { CorsOptions } from 'cors'

const allowOrigins = ['http://localhost', 'http://localhost:5173', 'http://52.63.27.28']
export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not Allowed By CORS'))
    }
  },
}
