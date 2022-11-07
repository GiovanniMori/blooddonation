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