import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";
import SignInGoogle from "./SignInGoogle"
import { Link, redirect, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";


export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const navigate = useNavigate();
    const { createUser } = UserAuth();
    const { user } = UserAuth();

    if (user) {
        return navigate('/')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(registerEmail, registerPassword)
            navigate('/form')
        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <div className="text-center mx-auto px-3">
            <div className="flex flex-col">
                <div className="mt-6 mb-3 py-2">
                    <SignInGoogle />
                </div>
                <h1 className="mb-3 text-lg text-black font-bold">
                    ou
                </h1>
                <div className="flex flex-col mb-2">
                    <input
                        className="py-2 px-6 mb-5 text-black border-2 border-black rounded-2xl"
                        type="email"
                        placeholder="Digite seu Email"
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    ></input>
                    <input
                        className="py-2 px-6 mb-5 text-black border-2 border-black rounded-2xl"
                        type="password"
                        placeholder="Digite sua Senha"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }} ></input>
                </div>
                
                <button
                    type="submit"
                    className="text-white font-bold text-xl py-2 px-5 mb-3 mx-auto rounded-xl border-white border-2 bg-primary"
                    onClick={handleSubmit}
                >
                    Criar Conta
                </button>
                <div className="mt-2">
                    <p className='text-black text-lg'>Não tem conta ainda?</p>
                    <Link to='/login' className='underline text-primary'>Entre</Link>
                </div>
                
                <h1>Ao clicar "Criar Conta", eu concordo com os termos e condições</h1>

            </div>
        </div>
    )
}
