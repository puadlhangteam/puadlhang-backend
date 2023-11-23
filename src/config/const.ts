export const PORT = process.env.PORT || 8080

export const AllowLevel = ['ง่าย', 'กลาง', 'ยาก'] as const
export type TAllowLevel = 'ง่าย' | 'กลาง' | 'ยาก'
