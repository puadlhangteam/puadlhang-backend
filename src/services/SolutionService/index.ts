import solutionRepository, { ISolutionRepository } from '@src/repositories/SolutionRepository'
import userRepository, { IUserRepository } from '@src/repositories/UserRepository'
import { IComment, ISolutionModel } from '@src/types/solution'
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
    const result = await Promise.all(solutions.map(this.joinSolution))
    return result
  }

  create: ISolutionService['create'] = async (solutionData) => {
    this.solutionRepository.create(solutionData)
  }

  update: ISolutionService['update'] = async (solutionId, solutionData) => {
    this.solutionRepository.update(solutionId, solutionData)
  }

  delete: ISolutionRepository['delete'] = async (solutionId) => {
    this.solutionRepository.delete(solutionId)
  }
}

const solutionService = new SolutionService(solutionRepository, userRepository)
export default solutionService
export * from './type'
