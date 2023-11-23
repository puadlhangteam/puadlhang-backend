import { CollectionReference, db } from '@src/config/firebase'
import { ISpecialistApplication } from '@src/types/role'
import { IRoleSpecialistRepository } from './type'

class RoleSpecialistRepository implements IRoleSpecialistRepository {
  constructor(private specialistApplication: CollectionReference) {}
  getOne: IRoleSpecialistRepository['getOne'] = async (formId) => {
    const application = await this.specialistApplication.doc(formId).get()
    return application.data() as ISpecialistApplication | null
  }
  getAll: IRoleSpecialistRepository['getAll'] = async () => {
    const applications = await this.specialistApplication.get()
    return applications.docs.map((doc) => doc.data() as ISpecialistApplication)
  }
  getOneByUid: IRoleSpecialistRepository['getOneByUid'] = async (uid) => {
    const application = await this.specialistApplication.where('uid', '==', uid).get()

    return application.docs[0]?.data() as ISpecialistApplication | null
  }
  apply: IRoleSpecialistRepository['apply'] = async (formBody) => {
    const newdoc = await this.specialistApplication.add(formBody)
    await newdoc.update({ formId: newdoc.id })
  }
  update: IRoleSpecialistRepository['update'] = async (formId, formBody) => {
    this.specialistApplication.doc(formId).update(formBody)
  }
  approved: IRoleSpecialistRepository['approved'] = async (formId) => {
    this.specialistApplication.doc(formId).update({ approved: true })
  }
}

const roleSpecialistRepository = new RoleSpecialistRepository(db.collection('specialistApplication'))
export default roleSpecialistRepository
export * from './type'
