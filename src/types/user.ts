import { DecodedIdToken } from 'firebase-admin/auth'

export type IUserData = {
  username: string
  uid: string
  email: string
  picture?: string
  gender?: 'male' | 'female'
  age?: number
  isSpecialist?: boolean
}
export type IUser = IUserData & {
  isAdmin?: boolean
}
export type IUserCredential = {
  name?: string
  picture?: string
  uid: string
  email: string
} & DecodedIdToken
