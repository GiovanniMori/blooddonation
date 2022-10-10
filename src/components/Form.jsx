import React from "react";
import { useForm } from "react-hook-form";
import { AuthContextProvider, UserAuth } from "../contexts/AuthContext";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user } = UserAuth();

    return (
        <div>
            {user ? (<div className='bg-secondary py-7 px-12'>
                <div className="p-4 font-bold">
                    <h1 className="text-4xl text-black font-bold px-16">Realize seu cadastro aqui</h1>
                    <div className="flex flex-col px-16 py-3">
                        <form onSubmit={handleSubmit((data) => console.log(data))}>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Nome</h1>
                                <input className="h-10 rounded-md w-2/3" placeholder="Digite o seu Nome" {...register("firstName")} />
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
            </div>) : (<div className='bg-secondary py-7 px-12'>
                <div className="p-4 font-bold">
                    <h1 className="text-4xl text-black font-bold px-16">Você não está logado</h1>
                </div>
            </div>)}
        </div>
    );
};

export default Form;
