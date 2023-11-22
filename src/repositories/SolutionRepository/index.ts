import { CollectionReference } from 'firebase-admin/firestore'
import { db } from '../../config/service-accounts'
import { ISolutionModel } from '../../types/solution'
import { ISolutionRepository } from './type'

class SolutionRepository implements ISolutionRepository {
  constructor(private Solution: CollectionReference) {}

  getAll: ISolutionRepository['getAll'] = async () => {
    const solutions = await this.Solution.get()
    return solutions.docs.map((v) => v.data() as ISolutionModel)
  }
  create: ISolutionRepository['create'] = async (solutionData) => {
    const newdoc = await this.Solution.add(solutionData)
    await newdoc.update({ formId: newdoc.id })
  }
  update: ISolutionRepository['update'] = async (solutionId, solutionData) => {
    this.Solution.doc(solutionId).update(solutionData)
  }
  delete: ISolutionRepository['delete'] = async (solutionId) => {
    this.Solution.doc(solutionId).delete()
  }
}

const solutionRepository = new SolutionRepository(db.collection('solutions'))
export default solutionRepository
export * from './type'
