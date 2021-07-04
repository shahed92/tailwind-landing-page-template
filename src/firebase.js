import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiVw8he2faxBciMp3o7frk_4YRR_as_DI",
  authDomain: "evatix-21579.firebaseapp.com",
  projectId: "evatix-21579",
  storageBucket: "evatix-21579.appspot.com",
  messagingSenderId: "509052069447",
  appId: "1:509052069447:web:f9c704bc032d32d50db362",
  measurementId: "G-JF0020C118",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default firebase;
export { auth };
