import { Router } from 'express'
import adminController from '../../controllers/AdminController'
import authMiddleware from '../../middlewares/Auth'

const adminRouter = Router()

adminRouter.use(authMiddleware.protected)

adminRouter.post('/role/specialist', adminController.grantSpecialistRole)

export default adminRouter
