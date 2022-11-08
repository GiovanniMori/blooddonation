import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContextProvider, UserAuth } from "../contexts/AuthContext";
import Axios from "axios";
import { useState } from "react";
import UserCard from "../components/User-card/userCard";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { getFirestore } from "firebase/firestore";

const Form = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  console.log("entrou");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [genero, setGenero] = useState("");
  const [tipo_sangue, setTipo_sangue] = useState("");

  const addDoador = () => {
    Axios.post("https://server-blooddonation.vercel.app/add", {
      nome: nome,
      idade: idade,
      email: email,
      rg: rg,
      cpf: cpf,
      genero: genero,
      tipo_sangue: tipo_sangue,
    }).then(() => {
      console.log(`Dados Enviados com sucesso, nome: ${nome}`);
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-col my-6">
          <h2 className="text-3xl font-primary mx-auto text-primary font-bold py-3">
            Digite suas informções para continur usando o sistema
          </h2>
        </div>
        <div className="flex flex-col mb-2">
          <h1 className="text-black font-bold text-lg mx-auto mb-1">
            Digite seu nome
          </h1>
          <input
            onChange={(event) => {
              setNome(event.target.value);
            }}
            className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
            placeholder="Digite o seu Nome"
          />

          <span className="text-primary font-bold text-lg mx-auto mb-1">
            Preencha o campo nome
          </span>
        </div>

        <div className="flex flex-col mb-2">
          <h1 className="text-black font-bold text-lg mx-auto mb-1">
            Digite sua idade
          </h1>
          <input
            onChange={(event) => {
              setIdade(event.target.value);
            }}
            className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
            placeholder="Digite a sua idade"
          />

          <span className="text-primary font-bold text-lg mx-auto mb-1">
            Preencha o campo CPF
          </span>
        </div>

        <div className="flex flex-col mb-2">
          <h1 className="text-black font-bold text-lg mx-auto mb-1">
            Digite seu e-mail
          </h1>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
            placeholder="Digite o seu Email"
          />

          <span className="text-primary font-bold text-lg mx-auto mb-1">
            Preencha o campo e-mail
          </span>
        </div>

        <div className="flex flex-col mb-2">
          <h1 className="text-black font-bold text-lg mx-auto mb-1">
            Digite o seu RG
          </h1>
          <input
            onChange={(event) => {
              setRg(event.target.value);
            }}
            className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
            placeholder="Digite o seu RG"
          />

          <span className="text-primary font-bold text-lg mx-auto mb-1">
            Preencha o campo tipo sanguineo
          </span>
        </div>

        <div className="flex flex-col mb-2">
          <h1 className="text-black font-bold text-lg mx-auto mb-1">
            Digite seu CPF
          </h1>
          <input
            onChange={(event) => {
              setCpf(event.target.value);
            }}
            className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
            placeholder="Digite o seu CPF"
          />

          <span className="text-primary font-bold text-lg mx-auto mb-1">
            Preencha o campo tipo sanguineo
          </span>
        </div>

        <div className="flex flex-col mb-2">
          <h1 className="text-black font-bold text-lg mx-auto mb-1">
            Selecione seu Genero
          </h1>
          <input
            onChange={(event) => {
              setGenero(event.target.value);
            }}
            className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
            placeholder="Selecione o seu genero"
          />

          <span className="text-primary font-bold text-lg mx-auto mb-1">
            Preencha o campo tipo sanguineo
          </span>
        </div>

        <div className="flex flex-col mb-2">
          <h1 className="text-black font-bold text-lg mx-auto mb-1">
            Selecione seu tipo sanguíneo
          </h1>
          <input
            onChange={(event) => {
              setTipo_sangue(event.target.value);
            }}
            className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
            placeholder="Selecione o seu tipo sanguíneo"
          />

          <span className="text-primary font-bold text-lg mx-auto mb-1">
            Preencha o campo tipo sanguineo
          </span>
        </div>

        <div className="flex mb-2 justify-center">
          <input
            onClick={addDoador}
            className="border-2 border-black py-2 w-32 font-bold rounded-xl cursor-pointer mr-2 hover:bg-primary hover:border-tertiary"
            type="submit"
          />
          <input
            className="border-2 border-black py-2 w-32 font-bold rounded-xl cursor-pointer ml-2 hover:bg-primary hover:border-tertiary"
            type="button"
            onClick={() => reset()}
            value="Limpar"
          />
        </div>

        <div>
          <UserCard />
        </div>
      </div>
    </>
  );
};

export default Form;
