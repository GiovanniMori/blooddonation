import {React, useState} from 'react'


function Step({title, text}){
    const [aparece,setAparece] = useState(false)

    const handleClick = event => {
        setAparece(current => !current)
    }

  return (
    <div className="flex flex-col" >
      <button onClick={handleClick} className="bg-red-500 rounded-full w-44 h-44 border-4 mr-4 border-black cursor-pointer text-3xl text-white">Teste</button>
      {aparece && (
        <div className="absolute mx-auto left-1/2 -translate-x-1/2 mt-48 bg-white p-16 bg-opacity-30 border-4 border-red-900 rounded-xl">
        <h1 className="text-3xl text-primary text-center font-semibold ">{title}</h1>
        <p className="text-2xl text-black text-center mt-12">
        {text}
        </p>
    </div>
    )
    }
    </div>
  )
}

export default Step