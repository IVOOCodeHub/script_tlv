export const isOnProduction: boolean = false

export const formatPhoneNumber = (input: string): string => {
  const digits: string = input.replace(/\D/g, '')
  return digits.replace(/(\d{2})(?=\d)/g, '$1.')
}

export const removeDotsFromNumber = (str: string): string => {
  return str.replace(/\./g, '')
}

export const formatDateForDisplay = (date: string): string => {
  const dateObj: Date = new Date(date)
  const day: string = String(dateObj.getDate()).padStart(2, '0')
  const month: string = String(dateObj.getMonth() + 1).padStart(2, '0')
  const year: number = dateObj.getFullYear()
  return `${day}/${month}/${year}`
}

export const formatDateForDisplayWithTime = (date: string): string => {
  const dateObj: Date = new Date(date)
  const day: string = String(dateObj.getDate()).padStart(2, '0')
  const month: string = String(dateObj.getMonth() + 1).padStart(2, '0')
  const year: number = dateObj.getFullYear()
  const hours: string = String(dateObj.getHours()).padStart(2, '0')
  const minutes: string = String(dateObj.getMinutes()).padStart(2, '0')
  return `${day}/${month}/${year} ${hours}:${minutes}`
}

export const formatCampaignNameForFrontEnd = (campaign: string): string => {
  // every campaign name have a p at the end in dataBase. We remove it for display in frontEnd
  return campaign.slice(0, -1)
}

export const formatCampaignNameForBackEnd = (campaign: string): string => {
  // every campaign name have a p at the end in dataBase. We add it for search in backEnd
  return campaign + 'p'
}
