import React, { useState } from 'react'
import {GetSudeste} from "./database/sudeste"
import {getSul} from "./database/sul"
import {getCentro} from "./database/centro"
import {getNorte} from "./database/norte"
import { getNordeste } from './database/nordeste'
import sudesteModal from './modais/sudesteModal'
import { Link } from "react-router-dom";

const OndeDoar = () => {
    return (
      <div className='bg-primary bg-opacity-95 pt-16 pb-64'>
        <h1 className="text-white text-center font-bold text-3xl py-16">Encontre o hemocentro mais próximo</h1>
        
        <div className="flex">
            <ul className="flex p-4 mx-auto">
              
                <Link to="sudeste" className='bg-white text-black border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Sudeste</Link>
                <button onClick={getSul} className='bg-white text-black border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Sul</button>
                <button onClick={getCentro} className='bg-white text-black border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Centro Oeste</button>
                <button onClick={getNorte} className='bg-white text-black border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Norte</button>
                <button onClick={getNordeste} className='bg-white text-black border-2 rounded-xl border-black font-bold py-5 px-7 mr-4'>Nordeste</button>              
            </ul>
        </div>
      </div>
    )
}

export default OndeDoar





