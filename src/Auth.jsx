import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {};
  const logout = async () => {};

  return (
    <>
      <div>
        <button onClick={(register) => toggleModal()}>Auth</button>
      </div>

      {open && (
        <div className="fixed rounded-md w-[400px] ml-[-300px] mt-3 p-4 bg-white">
          <div className="flex flex-col p-6">
            <h1 className="text-primary font-bold text-2xl mx-auto mb-6">
              Faça o login
            </h1>
            <input
              className="p-6 hover:border-black mb-6"
              type="email"
              placeholder="Digite seu Email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              className="p-6 hover:border-black mb-6"
              type="password"
              placeholder="Digite sua Senha"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <button
              type="submit"
              className="text-white font-bold text-xl w-[100px] mx-auto rounded-xl py-3 bg-primary"
              onClick={() => toggleModal()}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Auth;
