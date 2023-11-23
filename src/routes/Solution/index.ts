import solutionController from '@src/controllers/SolutionController'
import authMiddleware from '@src/middlewares/Auth'
import { Router } from 'express'

// user router
const solutionRouter = Router()
// Middleware
solutionRouter.patch('*', authMiddleware.adminProtected)
solutionRouter.delete('*', authMiddleware.adminProtected)

// Path
solutionRouter.get('/', solutionController.getAll)
solutionRouter.get('/solution/:solutionId', solutionController.getOne)

solutionRouter.post('/', authMiddleware.adminProtected, solutionController.create)
solutionRouter.patch('/solution/:solutionId', solutionController.update)
solutionRouter.delete('/solution/:solutionId', solutionController.delete)

export default solutionRouter
