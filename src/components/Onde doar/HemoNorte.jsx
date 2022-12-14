import {useState, React} from 'react'

let norte = [
    {
      Nome: "Fundação de Hematologia e Hemoterapia do Amazonas",
      Endereco: "Av. Constantino Nery, 4397 - Chapada",
      Telefone: "(92) 3655-0226/3656-0225",
    },
  
    {
      Nome: "Centro de Hemoterapia e Hematologia de Roraima",
      Endereco: "Av. Brigadeiro Eduardo Gomes, 3418",
      Telefone: "(95) 2121-0860/0859",
    },
  
    {
      Nome: "Fundação Centro de Hemoterapia e Hematologia do Pará",
      Endereco: "Trav. Padre Eutiquio, 2109 - Bairro Batista Campos",
      Telefone: "(91) 3110-6502/6501",
    },
  
    {
      Nome: "Centro de Hemoterapia e Hematologia do Acre",
      Endereco: "Av. Getúlio Vargas, 2787 - Vila Ivonete",
      Telefone: "(68) 3228-1500",
    },
    {
      Nome: "Instituto de Hematologia e Hemoterapia do Estado do Amapá",
      Endereco: "Av. Raimundo Álvares da Costa, s/nº - Centro",
      Telefone: "(96) 3212-6289/6139 - Ramal: 224/243",
    },
  
    {
      Nome: "Fundação de Hematologia e Hemoterapia de Rondônia",
      Endereco: "Av. Governador Jorge Teixeira, 3766 – Setor Industrial",
      Telefone: "(69) 3216-5485",
    },
    {
      Nome: "Hemocentro do Estado do Tocantins",
      Endereco: "Quadra 301 Norte Conj. 02 Lote I",
      Telefone: "(63) 3218-3285/3287",
    },
  ];
  
  export const GetNorte = () => {
    const values = Object.values(norte)
    console.log(values)
  
    return (
        <div>
            <div className="text-2xl font-bold flex flex-col mb-3">{values.map(value => <p className="mb-5">{[value.Nome + '\n' , value.Endereco, value.Telefone]}</p>)}</div>
  
        </div>
        
    )
  }
  

function HemoNorte (){
    const [aparece,setAparece] = useState(false)

    const handleClick = event => {
        setAparece(current => !current)
    }

  return (
    <div className="flex flex-col" >
      <button onClick={handleClick} className="bg-red-500 rounded-full w-44 h-44 border-4 mr-4 border-black cursor-pointer text-3xl text-white">Norte</button>
      {aparece && (
        <div className="absolute mx-auto left-1/2 -translate-x-1/2 mt-48 bg-white p-16 bg-opacity-30 border-4 border-red-900 rounded-xl">
        <h1 className="text-3xl text-primary text-center font-semibold ">{"HemoNortes da região Norte"}</h1>
        <p>{<GetNorte />}</p>
    </div>
    )
    }
    </div>
  )
}

export default HemoNorte
