import adminController from '@src/controllers/AdminController'
import authMiddleware from '@src/middlewares/Auth'
import { Router } from 'express'

const adminRouter = Router()

adminRouter.use(authMiddleware.adminProtected)

adminRouter.get('/role/specialist', adminController.getRoleSpecialistApplication)
adminRouter.post('/role/specialist', adminController.approveRoleSpecialist)

export default adminRouter
