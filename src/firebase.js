import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBpVofNu7lkc2Z-z6z6zzXHGbigXlT9WQ",
  authDomain: "afribite-eba56.firebaseapp.com",
  projectId: "afribite-eba56",
  storageBucket: "afribite-eba56.firebasestorage.app",
  messagingSenderId: "86351630967",
  appId: "1:86351630967:web:e045a097f1ab354092ac72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Get Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export them correctly
export { auth, provider };
export const googleProvider = new GoogleAuthProvider();