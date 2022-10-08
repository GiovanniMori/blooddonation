import React from 'react'
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <div>
        <div class="login">
            <h2>Ja possui cadastro?</h2>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="flex flex-col mb-4">
                    <h1 className="font-bold text-xl text-white mb-2">Email</h1>
                    <input className="h-10 rounded-md w-2/3" placeholder="Digite o seu Nome" {...register("firstName")} />
                </div>
                <div className="flex flex-col mb-4">
                    <h1 className="font-bold text-xl text-white mb-2">Senha</h1>
                    <input className="h-10 rounded-md w-2/3" placeholder="Digite o seu Sobrenome" {...register("firstName")} />
                </div>
            </form> 
        </div>
        <div class="cadastro">
            <h2>Cadastre-se</h2>
        </div>
    </div>
  )
}

export default Login