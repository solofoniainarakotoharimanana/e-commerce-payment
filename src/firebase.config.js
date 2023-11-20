// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqm6mv47zTTvdLTfFlpT_-5bJatD5lGnA",
  authDomain: "bazaapp-ec07a.firebaseapp.com",
  projectId: "bazaapp-ec07a",
  storageBucket: "bazaapp-ec07a.appspot.com",
  messagingSenderId: "628049497727",
  appId: "1:628049497727:web:8e3764650c9b95677ff94a",
  measurementId: "G-94EK5YRM84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
