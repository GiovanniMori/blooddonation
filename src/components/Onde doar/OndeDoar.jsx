import React, { useState } from 'react'
import { Link } from "react-router-dom";
import mapa from "./mapabr.png"
const OndeDoar = () => {
    return (
      <div className='bg-primary bg-opacity-95 py-8'>
        <h1 className="text-white text-center font-bold text-3xl py-8">Encontre o hemocentro mais próximo</h1>
        <div className="flex justify-between mx-auto">
            <ul className="flex flex-col mx-auto h-[700px] mt-32">
                <Link to="sudeste" className='w-64 text-center text-2xl  mb-4 bg-primary text-white border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Sudeste</Link>
                <Link to="sul" className='w-64 text-center text-2xl mb-4 bg-primary text-white border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Sul</Link>
                <Link to="centro" className='w-64 text-center text-2xl mb-4 bg-primary text-white border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Centro Oeste</Link>
                <Link to="norte" className='w-64 text-center text-2xl mb-4 bg-primary text-white border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Norte</Link>
                <Link to="nordeste" className='w-64 text-center text-2xl mb-4  bg-primary text-white border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Nordeste</Link>              
            </ul>

            <img src={mapa} className="mx-auto w-[800px] h-[700px]"/>
        </div>
      </div>
    )
}

export default OndeDoar





