import React, { useState } from 'react'
import { Link } from "react-router-dom";
import HemoCentro from './HemoCentro';
import HemoNordeste from './HemoNordeste';
import HemoNorte from './HemoNorte';
import HemoSudeste from './HemoSudeste';
import HemoSul from './HemoSul';

const OndeDoar = () => {
    return (
      <div className='bg-opacity-95 py-8'>
        <div className="flex justify-between mx-auto">
            <ul className="flex mx-auto mt-32">
                <HemoSudeste/>
                <HemoSul />
                <HemoCentro />
                <HemoNorte />
                <HemoNordeste />
            </ul>
        </div>
      </div>
    )
}

export default OndeDoar
