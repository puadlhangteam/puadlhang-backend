import { CollectionReference } from 'firebase-admin/firestore'
import { db } from '../../config/service-accounts'
import { ISolutionDTO } from '../../types/dto'
import { ISolutionRepository } from './type'

class SolutionRepository implements ISolutionRepository {
  constructor(private Solution: CollectionReference) {}
  getAll: ISolutionRepository['getAll'] = async () => {
    const solutions = await this.Solution.get()
    return solutions.docs.map((v) => v.data() as ISolutionDTO)
  }
}

const solutionRepository = new SolutionRepository(db.collection('solutions'))
export default solutionRepository
export * from './type'
