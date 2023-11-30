// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyByDkVhFYCHBGIVc9RT1qAQtHr1QdkJ0Ww",
  authDomain: "contact-2b183.firebaseapp.com",
  projectId: "contact-2b183",
  storageBucket: "contact-2b183.appspot.com",
  messagingSenderId: "937327999848",
  appId: "1:937327999848:web:2d8b2380543f7ca08874dd",
  measurementId: "G-D908YGRNJ3",
  databaseURL : "https://contact-2b183-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//export const db = getFirestore(app);
export default app ;