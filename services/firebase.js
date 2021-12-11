import {initializeApp, getApps, getApp} from 'firebase/app'
import {firebaseConfig} from '../config'

// intitialize firebase application
const firebase = initializeApp(firebaseConfig)

export default firebase