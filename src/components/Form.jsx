import React from "react";
import { useForm } from "react-hook-form";
import { AuthContextProvider, UserAuth } from "../contexts/AuthContext";
import Axios from "axios"
import { useState } from "react";

const Form = () => {

   const [nome, setNome] = useState('')
   const [idade, setIdade] = useState(0)
   const [email, setEmail] = useState('')
   const [rg, setRg] = useState('')
   const [cpf, setCpf] = useState('')
   const [genero, setGenero] = useState('')
   const [tipo_sangue, setTipo_sangue] = useState('')

   const addDoador = () => {
    Axios.post('http://localhost:3001/add', {
        nome: nome,
        idade: idade,
        email: email,
        rg: rg,
        cpf: cpf,
        genero: genero,
        tipo_sangue: tipo_sangue
    }).then(() => {'Success'})
   }

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
                                <input onChange={(event) => {setNome(event.target.value)}} className="h-10 rounded-md w-2/3" placeholder="Digite o seu Nome"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Idade</h1>
                                <input onChange={(event) => {setIdade(event.target.value)}} className="h-10 rounded-md w-2/3" placeholder="Digite a sua idade"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Email</h1>
                                <input onChange={(event) => {setEmail(event.target.value)}} className="h-10 rounded-md w-2/3" placeholder="Digite o seu Email"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">RG</h1>
                                <input onChange={(event) => {setRg(event.target.value)}} className="h-10 rounded-md w-2/3" placeholder="Digite o seu RG"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">CPF</h1>
                                <input onChange={(event) => {setCpf(event.target.value)}} className="h-10 rounded-md w-2/3" placeholder="Digite o seu CPF"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Genero</h1>
                                <input onChange={(event) => {setGenero(event.target.value)}} className="h-10 rounded-md w-2/3" placeholder="Digite o seu genero"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <h1 className="font-bold text-xl text-white mb-2">Tipo de sangue</h1>
                                <input onChange={(event) => {setTipo_sangue(event.target.value)}} className="h-10 rounded-md w-2/3" placeholder="Digite o seu tipo de sangue"/>
                            </div>
                            <input onClick={addDoador} className="bg-primary rounded p-4 font-bold text-base text-white cursor-pointer" type="submit" />
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
