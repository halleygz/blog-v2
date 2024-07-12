import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, collection} from 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

const auth = app.auth();
const db = getFirestore(app)
const userCollection = collection(db, 'users')
const blogCollection = collection(db, 'blogs')
export { auth, app, db, blogCollection, userCollection };
