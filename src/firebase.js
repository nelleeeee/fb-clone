import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgqtxB-vOPvlYra7GcGowAXiFTZc8AeP8",
  authDomain: "fb-clone-dd68e.firebaseapp.com",
  databaseURL: "https://fb-clone-dd68e.firebaseio.com",
  projectId: "fb-clone-dd68e",
  storageBucket: "fb-clone-dd68e.appspot.com",
  messagingSenderId: "948646646294",
  appId: "1:948646646294:web:0332540e78948badfe9b37",
  measurementId: "G-ZR3HRVCDDC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
