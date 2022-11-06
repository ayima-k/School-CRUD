import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmvuE1jlcH70suFwL2pQJ2ncW0a6neisQ",
  authDomain: "school-crud-dd841.firebaseapp.com",
  databaseURL: "https://school-crud-dd841-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "school-crud-dd841",
  storageBucket: "school-crud-dd841.appspot.com",
  messagingSenderId: "1037137577317",
  appId: "1:1037137577317:web:fe89c3c287f6c384cf4d8c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const handleLoginWithGoogle = async() => {
  try{
    await signInWithPopup(auth, provider)
  }catch(e) {
    console.log(e);
  }
}