// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Y3d3TShf3pAcwLgak3pn2p0Qa3OkMF0",
  authDomain: "manufacturer-website-ba546.firebaseapp.com",
  projectId: "manufacturer-website-ba546",
  storageBucket: "manufacturer-website-ba546.appspot.com",
  messagingSenderId: "1084882941357",
  appId: "1:1084882941357:web:87318a92ac2260d4c21d24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
