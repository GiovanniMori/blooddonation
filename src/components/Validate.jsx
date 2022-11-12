import { React, useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { validateTestPhoneNumbers } from "firebase-admin/lib/auth/auth-config";

const validateTestPhoneNumbers = () => {
  const [cupomID, setCupomID] = useState("");

  function getId(id) {
    Axios.get(`http://3.83.103.196:3001/cupom/${id}`)
      .then(function (response) {
        console.log("sucesso", response);
      })
      .catch(function () {
        // handle error
        console.log("erro ");
      });
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const loginUser = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(getId(cupomID))}>
        <input
          onChange={(event) => {
            setCupomID(event.target.value);
          }}
          className="py-3 px-2 border-2 border-black w-[700px] rounded-xl mx-auto mb-2"
          placeholder="Digite o seu CPF"
        />
        <input
          className="border-2 border-black py-2 w-32 font-bold rounded-xl cursor-pointer mr-2 hover:bg-primary hover:border-tertiary"
          type="submit"
          onClick={console.log(cupomID)}
        />
      </form>
    </div>
  );
};

export default validateTestPhoneNumbers;
