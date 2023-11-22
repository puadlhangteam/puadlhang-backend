import { Router } from 'express'
import solutionController from '../../controllers/SolutionController'
import authMiddleware from '../../middlewares/Auth'

// user router
const solutionRouter = Router()
const protectedSolutionRouter = Router()

// Middleware
protectedSolutionRouter.use(authMiddleware.adminProtected)
solutionRouter.use(protectedSolutionRouter)

// Path
solutionRouter.get('/', solutionController.getAll)

protectedSolutionRouter.post('/', solutionController.create)
protectedSolutionRouter.patch('/solution/:solutionId', solutionController.update)
protectedSolutionRouter.delete('/solution/:solutionId', solutionController.delete)

export default solutionRouter
