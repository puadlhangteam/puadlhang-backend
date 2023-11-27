export const PORT = process.env.PORT || 8080

export type IAllowGender = 'male' | 'female'
export const AllowGender = ['male', 'female'] as IAllowGender[]

export type TAllowLevel = 'ง่าย' | 'ปานกลาง' | 'ยาก'
export const AllowLevel = ['ง่าย', 'ปานกลาง', 'ยาก'] as TAllowLevel[]

export const AllowMuscle = [
  'trapezius',
  'upper-back',
  'lower-back',
  'chest',
  'biceps',
  'triceps',
  'forearm',
  'back-deltoids',
  'front-deltoids',
  'abs',
  'obliques',
  'adductor',
  'abductors',
  'hamstring',
  'quadriceps',
  'calves',
  'gluteal',
  'head',
  'neck',
  'knees',
  'left-soleus',
  'right-soleus',
]

export type IAllowMuscle =
  | 'trapezius'
  | 'upper-back'
  | 'lower-back'
  | 'chest'
  | 'biceps'
  | 'triceps'
  | 'forearm'
  | 'back-deltoids'
  | 'front-deltoids'
  | 'abs'
  | 'obliques'
  | 'adductor'
  | 'abductors'
  | 'hamstring'
  | 'quadriceps'
  | 'calves'
  | 'gluteal'
  | 'head'
  | 'neck'
  | 'knees'
  | 'left-soleus'
  | 'right-soleus'
