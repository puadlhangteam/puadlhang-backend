import { Router } from 'express'
import solutionController from '../../controllers/SolutionController'
import authMiddleware from '../../middlewares/Auth'

// user router
const solutionRouter = Router()
// Middleware
solutionRouter.patch('*', authMiddleware.adminProtected)
solutionRouter.delete('*', authMiddleware.adminProtected)

// Path
solutionRouter.get('/', solutionController.getAll)
solutionRouter.get('/solution/:solutionId', solutionController.getOne)
solutionRouter.post('/solution/:solutionId/comments', solutionController.comment)

// admin protected
solutionRouter.post('/', authMiddleware.adminProtected, solutionController.create)
solutionRouter.patch('/solution/:solutionId', solutionController.update)
solutionRouter.delete('/solution/:solutionId', solutionController.delete)

export default solutionRouter
