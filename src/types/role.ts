import { UID } from '.'

export type ISpecialistForm = {
  certificate: string
  description: string
}

export type ISpecialistApplication = ISpecialistForm & UID
