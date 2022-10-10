import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInGoogle() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider)
      navigate('/form')
    } catch (e) {
      console.log(e.message)
    }
  };
  return (
    <div>
      <button className="text-white font-bold text-xl p-2 mx-auto rounded-xl py-3 bg-primary" onClick={(handleLogin)}>Continuar com o Google</button>
    </div>
  );

}
