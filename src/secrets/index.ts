import { readFileSync } from 'fs'
const AppConfig = JSON.parse(readFileSync('/run/secrets/service-account').toString())

export { AppConfig }
