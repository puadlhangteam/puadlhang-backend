export const PORT = process.env.PORT || 8080

export type IAllowGender = 'male' | 'female'
export const AllowGender = ['male', 'female'] as IAllowGender[]

export type TAllowLevel = 'ง่าย' | 'ปานกลาง' | 'ยาก'
export const AllowLevel = ['ง่าย', 'ปานกลาง', 'ยาก'] as TAllowLevel[]
