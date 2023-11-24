import { AllowLevel } from '../../config'
import solutionRepository, { ISolutionRepository } from '../../repositories/SolutionRepository'
import userRepository, { IUserRepository } from '../../repositories/UserRepository'
import { IComment, ISolutionModel } from '../../types/solution'
import { BadRequest400Error, NotFound404Error } from '../../utils/CustomError'
import { isArray, isNumber, isString, isValidValue } from '../../utils/validate'
import { ISolutionService } from './type'

class SolutionService implements ISolutionService {
  constructor(private solutionRepository: ISolutionRepository, private userRepository: IUserRepository) {}

  private joinSolution = async ({ comments, ...rest }: ISolutionModel) => {
    const newcomment = comments && (await Promise.all(comments.map(this.joinUserData)))
    newcomment.sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf())
    return { ...rest, comments: newcomment }
  }

  private joinUserData = async ({ OwnerUid, ...rest }: IComment) => {
    const OwnerData = await this.userRepository.getUser(OwnerUid)
    return { ...rest, OwnerUid: OwnerData! }
  }

  getAll: ISolutionService['getAll'] = async () => {
    const solutions = await this.solutionRepository.getAll()

    return solutions.map(({ comments, ...rest }) => rest)
  }

  getOne: ISolutionService['getOne'] = async (solutionId) => {
    const solution = await this.solutionRepository.getOne(solutionId)
    if (!solution) throw new NotFound404Error('solution not found')
    return await this.joinSolution(solution)
  }

  comment: ISolutionService['comment'] = async (solutionId, credential, commentData) => {
    const { uid } = credential
    const { rating, text } = commentData

    if (isNumber(rating)) throw new BadRequest400Error('Invalid rating')

    if (isString(text)) throw new BadRequest400Error('Invalid comment text')

    await this.solutionRepository.comment(solutionId, { OwnerUid: uid, rating, text, createdAt: new Date().valueOf() })
  }

  create: ISolutionService['create'] = async (solutionData) => {
    const { level, muscle, name, pictures, solutions, type, items, videoUrl } = solutionData

    if (!isString(level) || !isValidValue(level, AllowLevel))
      throw new BadRequest400Error('level is required and must be ง่าย or กลาง or ยาก')
    if (!isString(muscle)) throw new BadRequest400Error('muscle is missing') // TODO
    if (!isString(name)) throw new BadRequest400Error('Invalid name')
    if (!isArray(pictures)) throw new BadRequest400Error('Invalid pictures')
    if (!isArray(solutions)) throw new BadRequest400Error('Invalid solutions')
    if (!isString(type)) throw new BadRequest400Error('type is missing')
    if (items && !isArray(items)) throw new BadRequest400Error('Invalid items')
    if (videoUrl && !isString(videoUrl)) throw new BadRequest400Error('Invalid videoUrl')

    this.solutionRepository.create({ level, muscle, name, pictures, solutions, type, items, videoUrl, comments: [] })
  }

  update: ISolutionService['update'] = async (solutionId, solutionData) => {
    const { level, muscle, name, pictures, solutions, type, items, videoUrl } = solutionData

    if (level && (!isString(level) || !isValidValue(level, AllowLevel)))
      throw new BadRequest400Error('level is required and must be ง่าย or กลาง or ยาก')
    if (muscle && !isString(muscle)) throw new BadRequest400Error('muscle is missing') // TODO
    if (name && !isString(name)) throw new BadRequest400Error('Invalid name')
    if (pictures && !isArray(pictures)) throw new BadRequest400Error('Invalid pictures')
    if (solutions && !isArray(solutions)) throw new BadRequest400Error('Invalid solutions')
    if (type && !isString(type)) throw new BadRequest400Error('type is missing')
    if (items && !isArray(items)) throw new BadRequest400Error('Invalid items')
    if (videoUrl && !isString(videoUrl)) throw new BadRequest400Error('Invalid videoUrl')

    this.solutionRepository.update(solutionId, { level, muscle, name, pictures, solutions, type, items, videoUrl })
  }

  delete: ISolutionRepository['delete'] = async (solutionId) => {
    this.solutionRepository.delete(solutionId)
  }
}

const solutionService = new SolutionService(solutionRepository, userRepository)
export default solutionService
export * from './type'
