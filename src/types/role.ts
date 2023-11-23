import { UID } from '.'
import { IReqSpecialistFormDTO } from './dto'

export type ISpecialistForm = IReqSpecialistFormDTO & UID

export type ISpecialistApplication = ISpecialistForm & { formId: string }
