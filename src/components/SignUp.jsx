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
        <div className="text-center mx-auto p-4 ">
            <div className="flex flex-col p-6">
                <SignInGoogle />
                <h1>
                    ou
                </h1>
                <input
                    className="p-6 hover:border-black mb-6 text-black border-2 border-red-500 rounded-2xl"
                    type="email"
                    placeholder="Digite seu Email"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                ></input>
                <input
                    className="p-6 hover:border-black mb-6 text-black border-2 border-red-500 rounded-2xl"
                    type="password"
                    placeholder="Digite sua Senha"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} ></input>
                <button
                    type="submit"
                    className="text-white font-bold text-xl p-2 mx-auto rounded-xl py-3 bg-primary"
                    onClick={handleSubmit}
                >
                    Criar Conta
                </button>
                <h1>Já tem uma conta? <Link to='/login' className='underline text-primary'>Entre</Link></h1>
                <h1>Ao clicar "Criar Conta", eu concordo com os termos e condições</h1>

            </div>
        </div>
    )
}
