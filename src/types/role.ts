import { UID } from '.'
import { ISpecialistFormDTO } from './dto'

export type ISpecialistForm = ISpecialistFormDTO & UID

export type ISpecialistApplication = ISpecialistForm & { formId: string }
