import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD1IX60WXJ_ww8uUCpJPExhbXVhemiPWgo",
  authDomain: "netflix-clone-afa2e.firebaseapp.com",
  projectId: "netflix-clone-afa2e",
  storageBucket: "netflix-clone-afa2e.firebasestorage.app",
  messagingSenderId: "55302890145",
  appId: "1:55302890145:web:1f12cc89d5442bd06f06e0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("/").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("/").join(" "));
  }
};

const logout = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export { auth, db, signup, login, logout };
