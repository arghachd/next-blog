import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDksqAYKN7EtMeYzfqMzeCkRVCvO_3v28U',
  authDomain: 'next-blog-21af3.firebaseapp.com',
  projectId: 'next-blog-21af3',
  storageBucket: 'next-blog-21af3.appspot.com',
  messagingSenderId: '140818471548',
  appId: '1:140818471548:web:d65f386461e2e4dff8c7f9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
