export const isNumber = (num: any) => {
  return !!((num || num === 0) && !isNaN(num))
}

export const isString = (str: any): boolean => {
  return !!(str || str === '')
}

export const isValidValue = <T>(value: T, AllowValue: T[]): boolean => {
  return AllowValue.includes(value)
}

export const isArray = (arr: any[]) => arr && Array.isArray(arr)
