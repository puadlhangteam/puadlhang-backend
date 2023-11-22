import { cert, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import Appconfig from './service-account.json'

const adminApp = initializeApp({
  credential: cert(Appconfig as Record<string, string>),
})

export const db = getFirestore(adminApp)
db.settings({ ignoreUndefinedProperties: true })
export const auth = getAuth(adminApp)
