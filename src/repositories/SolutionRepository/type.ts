import { ISolutionDTO } from '../../types/dto'

export type ISolutionRepository = {
  getAll: () => Promise<ISolutionDTO[]>
}
