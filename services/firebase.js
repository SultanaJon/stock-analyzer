import {initializeApp, getApps, getApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {firebaseConfig} from '../config'

const firebaseApps = getApps()
if(!firebaseApps.length){
    console.log('initializing firebase app')

    // intitialize firebase application
    initializeApp(firebaseConfig)
}

const app = getApp()
const auth = getAuth(app)

export default auth