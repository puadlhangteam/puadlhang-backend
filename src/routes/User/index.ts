import userController from '@src/controllers/UserController'
import authMiddleware from '@src/middlewares/Auth'
import { Router } from 'express'

// user router
const userRouter = Router()

// Middleware
userRouter.use(authMiddleware.protected)

// Path
userRouter.get('/me', userController.getMyData)
userRouter.patch('/', userController.updateMyData)
userRouter.post('/role/specialist', userController.applyRoleSpecialist)

export default userRouter
