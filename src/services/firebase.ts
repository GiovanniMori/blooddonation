import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4uAXHMdsYGCD6ZUmMUCRZObvVgm8vE-c",
    authDomain: "blood-donation-f7ecc.firebaseapp.com",
    projectId: "blood-donation-f7ecc",
    storageBucket: "blood-donation-f7ecc.appspot.com",
    messagingSenderId: "244150515559",
    appId: "1:244150515559:web:0f8676f20a3134a3ec61c2",
    measurementId: "G-3RWZJ3L53P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);