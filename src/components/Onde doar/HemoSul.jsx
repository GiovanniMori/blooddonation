import {useState, React} from 'react'

let sul = [
  {
      Nome: "Centro de Hemoterapia e Hematologia do Paraná",
      Endereco: "Travessa João Prosdócimo, 145 Alto da Quinze",
      Telefone: "(41) 3281-4000",
  },
  {
      Nome: "Centro de Hemoterapia e Hematologia de Stª Catarina",
      Endereco: "Av. Othon Gama D’eça, 756 Praça D. Pedro I Centro",
      Telefone: "(48)3251-9800",
  },
  {
      Nome: "Hemocentro do Estado do Rio Grande do Sul",
      Endereco: "End. Hemocentro: Av. Bento Gonçalves, nº 3722",
      Telefone: "(51) 3336-6755",
  }
]

export const GetSul = () => {
  const values = Object.values(sul)
  console.log(values)

  return (
      <div>
          <div className="text-2xl font-bold flex flex-col mb-3">{values.map(value => <p className="mb-5">{[value.Nome + '\n' , value.Endereco, value.Telefone]}</p>)}</div>

      </div>
      
  )
}

function HemoSul (){
    const [aparece,setAparece] = useState(false)

    const handleClick = event => {
        setAparece(current => !current)
    }

  return (
    <div className="flex flex-col" >
      <button onClick={handleClick} className="bg-red-500 rounded-full w-44 h-44 border-4 mr-4 border-black cursor-pointer text-3xl text-white">Sul</button>
      {aparece && (
        <div className="absolute mx-auto left-1/2 -translate-x-1/2 mt-48 bg-white p-16 bg-opacity-30 border-4 border-red-900 rounded-xl">
        <h1 className="text-3xl text-primary text-center font-semibold ">{"Hemocentros da região Sul"}</h1>
        <p>{<GetSul />}</p>
    </div>
    )
    }
    </div>
  )
}

export default HemoSul
