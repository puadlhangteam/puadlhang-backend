import { Router } from 'express'
import userController from '../../controllers/UserController'
import authMiddleware from '../../middlewares/Auth'

// user router
const userRouter = Router()

// Middleware
userRouter.use(authMiddleware.protected)

// Path
userRouter.get('/me', userController.getMyData)
userRouter.patch('/', userController.updateMyData)

export default userRouter
