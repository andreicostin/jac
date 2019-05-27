import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCdxxJD5zJzEpWmDOOeXRJCpW-SUIwYhTc',
  databaseURL: 'https://jac-test-519b9.firebaseio.com',
  projectId: 'jac-test-519b9',
  appId: '1:428786990922:web:00fc496330172e40'
})

export const db = firebaseApp.firestore()
