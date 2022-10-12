import { React, useEffect } from "react";
import { UserAuth, AuthContextProvider } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "../Form";
import { Autocomplete } from "@mui/material";

const PageHeader = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  const name = user.displayName;
  const photo = user.photoURL;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const  loginUser  =  data  =>  console.log(data);

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="flex flex-col my-6">
            <h2 className="text-3xl font-primary mx-auto text-primary font-bold py-3">Digite suas informções para continur usando o sistema</h2>
        </div>
        
        <div className="flex flex-col mb-2"> 
            <h1 className="text-black font-bold text-lg mx-auto mb-1">Digite seu nome</h1>
            <input className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2" placeholder="Digite seu nome" {...register("name", { required: true })} />
            {errors.name && <span className="text-primary font-bold text-lg mx-auto mb-1">Preencha o campo nome</span>}
        </div>
        
        <div className="flex flex-col mb-2"> 
            <h1 className="text-black font-bold text-lg mx-auto mb-1">Digite seu  CPF</h1>
            <input className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2" placeholder="Digite seu CPF" {...register("cpf", { required: true })} />
            {errors.name && <span className="text-primary font-bold text-lg mx-auto mb-1">Preencha o campo CPF</span>}
        </div>

        <div className="flex flex-col mb-2"> 
            <h1 className="text-black font-bold text-lg mx-auto mb-1">Digite seu e-mail</h1>
            <input className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2" placeholder="Digite seu e-mail" {...register("cpf", { required: true })} />
            {errors.name && <span className="text-primary font-bold text-lg mx-auto mb-1">Preencha o campo e-mail</span>}
        </div>

        <div className="flex flex-col mb-2"> 
            <h1 className="text-black font-bold text-lg mx-auto mb-1">Selecione seu tipo sanguíneo</h1>
            <input className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2" placeholder="Selecione seu tipo sanguineo" type="listbox" {...register("cpf", { required: true })} />
            {errors.name && <span className="text-primary font-bold text-lg mx-auto mb-1">Preencha o campo tipo sanguineo</span>}
        </div>

        <div className="flex mb-2 justify-center">
            <input className="border-2 border-black py-2 w-32 font-bold rounded-xl cursor-pointer mr-2 hover:bg-primary hover:border-tertiary" type="submit" />
            <input className="border-2 border-black py-2 w-32 font-bold rounded-xl cursor-pointer ml-2 hover:bg-primary hover:border-tertiary" type="button" onClick={() => reset()} value="Limpar" />
        </div>
        
      </form>
    </div>
  );
};

export default PageHeader;
