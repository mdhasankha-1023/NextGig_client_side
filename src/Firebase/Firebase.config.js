import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmg5bChnrj9b5ql2LsUd9bopSZHvFJZiM",
  authDomain: "nextgig-22b8d.firebaseapp.com",
  projectId: "nextgig-22b8d",
  storageBucket: "nextgig-22b8d.appspot.com",
  messagingSenderId: "224715814800",
  appId: "1:224715814800:web:28761a8db86fe579812515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;