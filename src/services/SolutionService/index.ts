import { AllowLevel } from '@src/config'
import solutionRepository, { ISolutionRepository } from '@src/repositories/SolutionRepository'
import userRepository, { IUserRepository } from '@src/repositories/UserRepository'
import { IComment, ISolutionModel } from '@src/types/solution'
import { BadRequest400Error, NotFound404Error } from '@src/utils/CustomError'
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

    return solutions
  }

  getOne: ISolutionService['getOne'] = async (solutionId) => {
    const solution = await this.solutionRepository.getOne(solutionId)
    if (!solution) throw new NotFound404Error('solution not found')
    return await this.joinSolution(solution)
  }

  comment: ISolutionService['comment'] = async (solutionId, credential, commentData) => {
    const { uid } = credential
    const { rating, text } = commentData

    if ((!rating && rating !== 0) || isNaN(rating)) throw new BadRequest400Error('Invalid rating')

    if (!text && text !== '') throw new BadRequest400Error('Invalid comment text')

    await this.solutionRepository.comment(solutionId, { OwnerUid: uid, rating, text, createdAt: new Date() })
  }

  create: ISolutionService['create'] = async (solutionData) => {
    const { level, muscle, name, pictures, solutions, type, items, videoUrl } = solutionData

    if (!level || (level && !AllowLevel.includes(level)))
      throw new BadRequest400Error('level is required and must be easy or medium or hard')

    // TODO
    if (!muscle) throw new BadRequest400Error('muscle is missing')

    if (!name) throw new BadRequest400Error('name is missing')

    if (!pictures || !Array.isArray(pictures)) throw new BadRequest400Error('Invalid pictures')

    if (!solutions || !Array.isArray(solutions)) throw new BadRequest400Error('Invalid solutions')

    if (items && !Array.isArray(items)) throw new BadRequest400Error('Invalid items')

    this.solutionRepository.create({ level, muscle, name, pictures, solutions, type, items, videoUrl, comments: [] })
  }

  update: ISolutionService['update'] = async (solutionId, solutionData) => {
    const { level, muscle, name, pictures, solutions, type, items, videoUrl } = solutionData

    if (level && !AllowLevel.includes(level))
      throw new BadRequest400Error('level is required and must be in ง่าย กลาง ยาก')

    if (pictures && !Array.isArray(pictures)) throw new BadRequest400Error('Invalid pictures')
    if (solutions && !Array.isArray(solutions)) throw new BadRequest400Error('Invalid solutions')
    if (items && !Array.isArray(items)) throw new BadRequest400Error('Invalid items')

    this.solutionRepository.update(solutionId, { level, muscle, name, pictures, solutions, type, items, videoUrl })
  }

  delete: ISolutionRepository['delete'] = async (solutionId) => {
    this.solutionRepository.delete(solutionId)
  }
}

const solutionService = new SolutionService(solutionRepository, userRepository)
export default solutionService
export * from './type'
