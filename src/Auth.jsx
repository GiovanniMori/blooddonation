import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => { };
  const logout = async () => { };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input type='email' placeholder="Email" onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
        />
        <input type='password' placeholder="Password" onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
        />
        <button onClick={(register)}>Criar Usuário</button>
      </div>
    </div>
  );
}

export default Auth;
