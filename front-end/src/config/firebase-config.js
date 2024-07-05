import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA7y9D83dMCLaqGft-fywkn_ub8vwkZcvk",
    authDomain: "webstite-7c584.firebaseapp.com",
    projectId: "webstite-7c584",
    storageBucket: "webstite-7c584.appspot.com",
    messagingSenderId: "334333610491",
    appId: "1:334333610491:web:3a0a85858553472c6d235e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);