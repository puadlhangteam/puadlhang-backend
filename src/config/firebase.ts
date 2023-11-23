import { AppConfig } from '@src/secrets'
import { cert, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

const adminApp = initializeApp({
  credential: cert(AppConfig as Record<string, string>),
})

export const db = getFirestore(adminApp)
db.settings({ ignoreUndefinedProperties: true })
export const auth = getAuth(adminApp)
export { DecodedIdToken } from 'firebase-admin/auth'
export { CollectionReference, DocumentReference, DocumentSnapshot, FieldValue } from 'firebase-admin/firestore'
