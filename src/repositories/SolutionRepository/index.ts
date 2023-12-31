import { CollectionReference, FieldValue, db } from '../../config/firebase'
import { ISolutionModel } from '../../types/solution'
import { ISolutionRepository } from './type'

class SolutionRepository implements ISolutionRepository {
  constructor(private Solution: CollectionReference) {}

  getAll: ISolutionRepository['getAll'] = async () => {
    const solutions = await this.Solution.get()
    return solutions.docs.map((v) => v.data() as ISolutionModel)
  }

  getByMuscle: ISolutionRepository['getByMuscle'] = async (muscle) => {
    const solutions = await this.Solution.where('muscle', '==', muscle).get()
    return solutions.docs.map((v) => v.data() as ISolutionModel)
  }
  getOne: ISolutionRepository['getOne'] = async (solutionId) => {
    const solution = await this.Solution.doc(solutionId).get()
    return solution.data() as ISolutionModel | undefined
  }

  comment: ISolutionRepository['comment'] = async (solutionId, commentData) => {
    await this.Solution.doc(solutionId).update({ comments: FieldValue.arrayUnion(commentData) })
  }

  create: ISolutionRepository['create'] = async (solutionData) => {
    const newdoc = await this.Solution.add(solutionData)
    await newdoc.update({ solutionId: newdoc.id })
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
