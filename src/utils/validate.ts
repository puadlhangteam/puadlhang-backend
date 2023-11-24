export const isNumber = (num: any) => {
  return !!((num || num === 0) && !isNaN(num))
}

export const isString = (str: any): boolean => {
  return !!(str || str === '')
}
