import {React, useState} from 'react'
import Primeiro from './Primeiro'
import Segundo from './Segundo'
import Terceiro from './Terceiro'
import Quarto from './Quarto'

const Caminho = () => {
    return (
        <div className="flex absolute">
            <Primeiro />
            <Segundo />
            <Terceiro />
            <Quarto />
        </div>
        
    )
    
}

export default Caminho
