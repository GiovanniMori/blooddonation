import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { useState } from "react";

function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  var userLogado = useState("");

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        userLogado = result;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleEmailSignIn = async () => {
    const login = await createUserWithEmailAndPassword(auth, setRegisterEmail, setRegisterPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const isLogged = onAuthStateChanged(auth, (userLogado) => {
    if (userLogado) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("Voce está logado")
      // ...
    } else {
      console.log("Voce não está logado")
      // User is signed out
      // ...
    }
  });

  return (
    <div>
      <button onClick={(handleGoogleSignIn)}>Login com google</button> 
    </div>
  );

}
export default SignIn;