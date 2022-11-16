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