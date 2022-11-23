import React from 'react'
import Navbar from '../Navbar'
import img from "../../assets/site-em.png"

const Beneficios = () => {
  return (
    
    <div>
      <Navbar />
      <div className="p-32 bg-opacity-90">
        <h1 className="text-6xl font-bold text-red-900 mb-8">Se você é um doador, aqui você encontra as melhores recompensas como forma de agradecimento pelo seu esforço.</h1>
        <h1 className="text-5xl text-green-900" >Caso ainda não faça parte do time, não perca tempo, salve vidas e ganhe benefícios.</h1>
      </div>

        <div className="bg-white bg-opacity-20 p-32 justify-between flex">
            <h1 className="text-black text-4xl font-bold my-auto">EM BUSCA DE GRANDES MARCAS, ACEITAMOS PARCERIAS!!!!!!!!!</h1>
            <img src={img}></img>
        </div>
 
    </div>
  )
}

export default Beneficios
