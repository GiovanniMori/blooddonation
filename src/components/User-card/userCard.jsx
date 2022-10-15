import React from "react";
import { auth } from "../../services/firebase";
import { UserAuth } from "../../contexts/AuthContext";
import Logo from "./blood.png"
import Card from "../../assets/card.png"
import "./userCard.css"

const UserCard = () => {
    const { user } = UserAuth();
    const getUserId = () => {
      Axios.get('http://localhost:3001', {
          email: email,
          
      }).then(() => {'Success'})
     }

     const userId = toString(getUserId)
  return (
    <div id="cartao" className="w-[500px] h-[320px] mx-auto my-32 bg-gradient-to-b from-secondary to-quartenary rounded-xl shadow-xl shadow-white flex flex-col bg-fixed">
      <h2 className="text-3xl font-bold mx-auto pt-6">Carteira de doação de sangue</h2>
      <div id="texts" className="flex flex-col px-6 pt-10"> 
        <label className="text-white text-2xl font-bold">{user.displayName}</label>
        <label className="mt-4 text-white font-bold text-2xl">User Id</label>
      </div>
      <div id="logo" className="flex justify-between px-6 pt-8">
        <label className="text-xl font-bold mt-10">Cada doação importa</label>
        <img className="h-24 w-24" src={Logo}></img>
      </div>
      
        
    </div>
  );
};

export default UserCard;
