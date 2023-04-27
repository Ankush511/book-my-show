import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTYFG_1VG37ypRpaBcVS772YRFJasrA9Q",
  authDomain: "cine-stream.firebaseapp.com",
  projectId: "cine-stream",
  storageBucket: "cine-stream.appspot.com",
  messagingSenderId: "342047269654",
  appId: "1:342047269654:web:551f4f8d4d2080614b6637",
  measurementId: "G-6HTF74DP69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// Anas Sabah TakenOver 