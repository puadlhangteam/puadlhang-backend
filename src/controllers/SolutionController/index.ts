import solutionService, { ISolutionService } from '@src/services/SolutionService'
import { UnAuthorized401Error } from '@src/utils/CustomError'
import { ISolutionController } from './type'

class SolutionController implements ISolutionController {
  constructor(private solutionService: ISolutionService) {}

  getAll: ISolutionController['getAll'] = async (req, res) => {
    const result = await this.solutionService.getAll()
    return res.status(200).json(result).end()
  }

  create: ISolutionController['create'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()
    await this.solutionService.create(req.body)
    return res.status(201).json({ message: 'Created' })
  }

  update: ISolutionController['update'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()
    const { solutionId } = req.params
    await this.solutionService.update(solutionId, req.body)
    return res.status(200).json({ message: 'updated' })
  }
  delete: ISolutionController['delete'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()
    const { solutionId } = req.params
    await this.solutionService.delete(solutionId)
    return res.status(200).json({ message: 'deleted' })
  }
}

const solutionController = new SolutionController(solutionService)
export default solutionController
export * from './type'
