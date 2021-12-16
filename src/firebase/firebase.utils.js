import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { ProviderId } from "firebase/auth";
const config = {
  apiKey: "AIzaSyDteolRVGUy-aUqypveXlR9KQa8sbJxf_8",
  authDomain: "crwn-db-c459a.firebaseapp.com",
  projectId: "crwn-db-c459a",
  storageBucket: "crwn-db-c459a.appspot.com",
  messagingSenderId: "372800182001",
  appId: "1:372800182001:web:dcceb802e5a83d3944bb50",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
