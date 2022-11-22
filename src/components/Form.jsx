import React, { useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import Axios from "axios";
import UserCard from "../components/User-card/userCard";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newCycleFormValidationSchema = zod.object({
  name: zod.string().min(3, "Informe um nome"),
  age: zod.string().min(3, "Informe um nome"),
});

function Form() {
  const { user } = UserAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });
  const navigate = useNavigate();

  function handleCreateNewCycle(data) {
    console.log(data);
    addDoador(data);
    reset();
  }
  // const name = watch("name");
  //console.log(formState.errors);
  const addDoador = (data) => {
    Axios.post(
      "http://localhost:3001/add",
      {
        nome: data.name,
        idade: data.age,
      },
      {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      }
    )
      .then(() => {
        console.log(`Dados Enviados com sucesso, nome: ${nome}`);
      })
      .finally(() => {
        console.log("oi");
      });
  };
  useEffect(() => {
    if (user) {
      // navigate("/");
      console.log("tem", user);
    } else {
      console.log("n tem");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="flex bg-red-500 flex-wrap">
        <section>
          <h2 className="text-3xl font-primary mx-auto text-primary font-bold py-3">
            Digite suas informções para continur usando o sistema
          </h2>
        </section>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <label className="flex mb-2 flex-wrap">
            <label>
              <h1 className="text-black font-bold text-lg mx-auto mb-1">
                Digite seu nome
              </h1>
              <input
                className="py-3 px-2 border-2 border-black rounded-xl mx-auto mb-2"
                placeholder="Digite o seu Nome"
                {...register("name", { required: true })}
              />
            </label>
            <label>
              <h1 className="text-black font-bold text-lg mx-auto mb-1">
                Insira sua data de nascimento
              </h1>
              <input
                className="py-3 px-2 border-2 border-black rounded-xl mx-auto mb-2"
                placeholder="Digite o seu Nome"
                {...register("age", { required: true })}
              />
            </label>
            {errors.name && <span>This field is required</span>}
          </label>

          <div className="flex mb-2 justify-center">
            <input
              className="border-2 border-black py-2 w-32 font-bold rounded-xl cursor-pointer mr-2 hover:bg-primary hover:border-tertiary"
              type="submit"
            />
          </div>
        </form>
        <div>
          <UserCard />
        </div>
      </div>
    </>
  );
}

export default Form;
