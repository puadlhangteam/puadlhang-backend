import { Router } from 'express'
import adminController from '../../controllers/AdminController'
import authMiddleware from '../../middlewares/Auth'

const adminRouter = Router()

adminRouter.use(authMiddleware.adminProtected)

adminRouter.get('/role/specialist', adminController.getRoleSpecialistApplication)
adminRouter.post('/role/specialist', adminController.approveRoleSpecialist)

export default adminRouter
