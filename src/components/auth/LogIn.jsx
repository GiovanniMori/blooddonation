import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import SignInGoogle from "./SignInGoogle";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { createUser, signIn, user } = UserAuth();
  const navigate = useNavigate();
  const [register, setRegister] = useState(props.isRegister);

  const Switch = () => {
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     // navigate("/");
  //     console.log("tem", user);
  //   } else {
  //     console.log("n tem");
  //   }
  // }, [user]);

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(registerEmail, registerPassword);
      navigate("/form");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {register ? (
        <div className="text-center mx-auto  w-[336px] ">
          <div className="flex flex-col">
            <div>
              <SignInGoogle />
            </div>
            <h1 className="mb-3 mt-3 text-lg text-slate-800 font-bold">ou</h1>
            <div className="flex flex-col mb-2">
              <input
                className="py-3 px-6 mb-5 text-slate-800 border-2 border-black rounded-xl"
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              ></input>
              <input
                className="py-3 px-6 mb-5 text-slate-800 border-2 border-black rounded-xl"
                type="password"
                placeholder="Senha"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              ></input>
            </div>

            <button
              type="submit"
              className="text-white font-bold text-xl py-3 px-5 mb-3 mx-auto rounded-xl border-white border-2 bg-red-500"
              onClick={handleSubmit}
            >
              Criar Conta
            </button>
            <div className="mt-2 flex gap-1 justify-center">
              <p className="text-slate-800 text-lg">Já tem conta?</p>

              <button onClick={Switch} className="text-red-800 font-bold">
                Entre
              </button>
            </div>
            <p className="text-slate-800 text-sm ">
              Ao clicar "Criar Conta", eu concordo com os termos e condições
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center mx-auto  w-[336px]">
          <div className="flex flex-col">
            <div>
              <SignInGoogle />
            </div>
            <h1 className="mb-3 mt-3 text-lg text-slate-800 font-bold">ou</h1>
            <div className="flex flex-col mb-2">
              <input
                className="py-3 px-6 mb-5 text-slate-800 border-2 border-black rounded-xl"
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></input>
              <input
                className="py-3 px-6 mb-5 border-2 border-black rounded-xl"
                type="password"
                placeholder="Senha"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></input>
            </div>
            <button
              type="submit"
              className="text-white font-bold text-xl py-3 px-5 mb-3 mx-auto rounded-xl border-white border-2 bg-red-500"
              onClick={handleSubmitSignIn}
            >
              Entrar
            </button>
            <div>
              <button className="text-red-800 font-bold">
                Esqueceu a senha?
              </button>
            </div>
            <div className="mt-2 flex gap-2 justify-center items-center">
              <p className="text-slate-800 text-sm ">Não tem conta ainda?</p>
              <button onClick={Switch} className="text-red-800 font-bold">
                Cadastre
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signin;
