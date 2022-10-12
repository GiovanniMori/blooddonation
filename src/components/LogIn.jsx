import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import SignInGoogle from './SignInGoogle';



const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
    const { user } = UserAuth();

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password)
            navigate('/account')
        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <div className='text-center mx-auto px-3'>
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
                            setEmail(event.target.value);
                        }}
                    ></input>
                    <input
                        className="py-2 px-6 mb-5 text-black border-2 border-black rounded-2xl"
                        type="password"
                        placeholder="Digite sua Senha"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} >

                    </input>
                </div>
                <button
                    type="submit"
                    className="text-white font-bold text-xl py-2 px-5 mb-3 mx-auto rounded-xl border-white border-2 bg-primary"
                    onClick={handleSubmit}
                >
                    Entrar
                </button>
                <div className="mt-2">
                    <p className='text-black text-lg'>Não tem conta ainda?</p>
                </div>
                <Link to='/cadastre' className='underline text-white text-xl'>
                    Cadastre
                </Link>
            </div>
        </div>
    );
};

export default Signin;