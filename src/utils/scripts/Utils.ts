export const isOnProduction: boolean = false

export const formatPhoneNumber = (input: string): string => {
  const digits: string = input.replace(/\D/g, '')
  return digits.replace(/(\d{2})(?=\d)/g, '$1.')
}

export const removeDotsFromNumber = (str: string): string => {
  return str.replace(/\./g, '')
}