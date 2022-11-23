import {useState, React} from 'react'

let centro = [
    {
        Nome: "Fundação Hemocentro de Brasília",
        Endereco: "SMHN Quadra 03 Conj. A bloco 3 - Asa Norte",
        Telefone: "(61)  3327-4774/4464/ 3327-4447",
    },
    {
        Nome: "Centro de Hemoterapia e Hematologia de Goiás",
        Endereco: "Av. Anhanguera, 5195 - Setor Coimbra",
        Telefone: "(62) 3231-7935",
    },
    {
        Nome: "Centro de Hemoterapia e Hematologia de Mato Grosso",
        Endereco: "Rua 13 de junho, 1055 - Centro",
        Telefone: "(65) 3623-0044/3321-0351/3622-0856",
    },
    {
        Nome: "Centro de Hemoterapia e Hematologia de Mato Grosso do Sul",
        Endereco: "Av. Fernando Correia da Costa, 1304 – Centro",
        Telefone: "(67) 3312-1500 /1501",
    }
]

export const GetCentro = () => {
    const values = Object.values(centro)
    console.log(values)

    return (
        <div>
            <div className="text-2xl font-bold flex flex-col mb-3">{values.map(value => <p className="mb-5">{[value.Nome + '\n' , value.Endereco, value.Telefone]}</p>)}</div>

        </div>
        
    )
}

function HemoCentro (){
    const [aparece,setAparece] = useState(false)

    const handleClick = event => {
        setAparece(current => !current)
    }

  return (
    <div className="flex flex-col" >
      <button onClick={handleClick} className="bg-red-500 rounded-full w-44 h-44 border-4 mr-4 border-black cursor-pointer text-3xl text-white">Centro-Oeste</button>
      {aparece && (
        <div className="absolute mx-auto left-1/2 -translate-x-1/2 mt-48 bg-white p-16 bg-opacity-30 border-4 border-red-900 rounded-xl">
        <h1 className="text-3xl text-primary text-center font-semibold ">{"Hemocentros da região Centro"}</h1>
        <p>{<GetCentro />}</p>
    </div>
    )
    }
    </div>
  )
}

export default HemoCentro
