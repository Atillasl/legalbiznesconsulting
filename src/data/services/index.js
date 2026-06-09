import { legalServices } from './legalServices'
import { itServices } from './itServices'

export { legalServices, itServices }
export const allServices = [...legalServices, ...itServices]
