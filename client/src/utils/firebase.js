
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewx-8012a.firebaseapp.com",
  projectId: "interviewx-8012a",
  storageBucket: "interviewx-8012a.firebasestorage.app",
  messagingSenderId: "735736127049",
  appId: "1:735736127049:web:561f93b7be470ae738e998"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}