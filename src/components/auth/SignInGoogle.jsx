import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../services/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function SignInGoogle() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
      navigate("/form");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <button
        className="text-black font-bold text-sm mt-4 w-full  rounded-xl py-3 px-6 border-2 border-black bg-white flex justify-center "
        onClick={handleLogin}
      >
        <FcGoogle className="mr-2 h-5 w-6" />
        Continuar com o Google
      </button>
    </div>
  );
}
