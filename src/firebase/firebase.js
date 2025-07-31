import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDNFlwq8CjBRJR45BjjZFMW4zqqWlBlp0M",
  authDomain: "ommart-97782.firebaseapp.com",
  projectId: "ommart-97782",
  storageBucket: "ommart-97782.firebasestorage.app",
  messagingSenderId: "581596422623",
  appId: "1:581596422623:web:fd2d96ee7455897546646a",
  measurementId: "G-LRSMG6ZVMG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}