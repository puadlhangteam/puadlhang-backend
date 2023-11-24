import solutionService, { ISolutionService } from '../../services/SolutionService'
import { UnAuthorized401Error } from '../../utils/CustomError'
import { ISolutionController } from './type'

class SolutionController implements ISolutionController {
  constructor(private solutionService: ISolutionService) {}

  getAll: ISolutionController['getAll'] = async (req, res) => {
    const result = await this.solutionService.getAll()

    return res.status(200).json(result).end()
  }
  getOne: ISolutionController['getOne'] = async (req, res) => {
    const { solutionId } = req.params
    const result = await this.solutionService.getOne(solutionId)

    return res.status(200).json(result).end()
  }

  create: ISolutionController['create'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()

    await this.solutionService.create(req.body)

    return res.status(201).json({ message: 'Created' })
  }

  comment: ISolutionController['comment'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()

    const { solutionId } = req.params

    await this.solutionService.comment(solutionId, credential, req.body)

    return res.status(201).json({ message: 'comment add' }).end()
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
