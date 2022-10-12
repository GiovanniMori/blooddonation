import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from "../services/firebase";


const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { user } = UserAuth();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const db = getFirestore(app);
    const userCollection = collection(db, 'user')

    async function criarUser() {
        const user = await addDoc(userCollection, {
            name,
            email,
        });

    }

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
        const getUsers = async () => {
            const data = await getDocs(userCollection);
            console.log(data)
        }
        getUsers();

    });

    return (
        <div>
            <div className='bg-secondary py-7 px-12'>
                <div className="p-4 font-bold">
                    <h1 className="text-4xl text-black font-bold px-16">Realize seu cadastro aqui</h1>
                    <div className="flex flex-col px-16 py-3">
                        <form onSubmit={criarUser}>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Nome</h1>
                                <input className="h-10 rounded-md w-2/3" placeholder="Digite o seu Nome" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Sobrenome</h1>
                                <input className="h-10 rounded-md w-2/3" placeholder="Digite o seu Sobrenome" {...register("firstName")} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Email</h1>
                                <input className="h-10 rounded-md w-2/3" placeholder="Digite o seu Email" {...register("Email")} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">CPF</h1>
                                <input className="h-10 rounded-md w-2/3" placeholder="Digite o seu CPF" {...register("CPF")} />
                            </div>
                            <input className="bg-primary rounded p-4 font-bold text-base text-white cursor-pointer" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
