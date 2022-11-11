import {React, useState} from 'react'

const PopText = () => {
    return (
        <div className=" mx-auto w-2/3 h-[300px] mt-5 bg-white bg-opacity-30 border-4 border-red-900 rounded-xl">
            <h1 className="text-3xl text-primary text-center mt-7">Titulo da sessão</h1>
            <p className="text-xl text-black text-center mt-10 mx-32">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum
            </p>
        </div>
    )
}

const Quarto = () => {
    const [aparece,setAparece] = useState(false)

    const handleClick = event => {
        setAparece(current => !current)
    }

  return (
    <div className="flex flex-col">
      <button onClick={handleClick} className="bg-red-500 rounded-full w-44 h-44 border-4 mr-4 border-black cursor-pointer text-3xl text-white">Teste</button>
      {aparece && (
        <PopText />
    )
    }
    </div>
  )
}

export default Quarto