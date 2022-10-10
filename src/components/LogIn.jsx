import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import SignInGoogle from './SignInGoogle';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
    const { user } = UserAuth();

    if (user) {
        return navigate('/')
    }

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
        <div className='text-center mx-auto my-16 p-4'>
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
                        setEmail(event.target.value);
                    }}
                ></input>
                <input
                    className="p-6 hover:border-black mb-6 text-black border-2 border-red-500 rounded-2xl"
                    type="password"
                    placeholder="Digite sua Senha"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }} ></input>
                <button
                    type="submit"
                    className="text-white font-bold text-xl p-2 mx-auto rounded-xl py-3 bg-primary"
                    onClick={handleSubmit}
                >
                    Entrar
                </button>
                <div>
                    <p className='text-primery'>Não tem conta ainda?</p>
                </div>
                <Link to='/cadastre' className='underline text-primary'>
                        Cadastre
                    </Link>
            </div>
        </div>
    );
};

export default Signin;