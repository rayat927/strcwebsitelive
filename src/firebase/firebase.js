import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCe3Bk5v_75gQtvr5bo-j4QfNQYRgJTEeE",
  authDomain: "fir-react-authentication-7b5fd.firebaseapp.com",
  projectId: "fir-react-authentication-7b5fd",
  storageBucket: "fir-react-authentication-7b5fd.appspot.com",
  messagingSenderId: "200152365957",
  appId: "1:200152365957:web:15cbf6867b5ef7d30ce2ec",
  measurementId: "G-RVV5601XMZ"
})

export const auth = app.auth()
export const db = app.firestore()
export const storage = app.storage()
export default app 