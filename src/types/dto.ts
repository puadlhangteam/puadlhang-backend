import { UID } from '.'
import { IUser, IUserData } from './user'

export type IUserResDTO = IUser
export type IUserReqDTO = IUser

export type IGrantRoleDTO = UID

export type IUpdateUserDTO = IUserData
export type IMessageDTO = { message: string }
