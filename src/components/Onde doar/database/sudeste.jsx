let sudeste = {
    1 : {
            Nome: "Fundação PRÓ-SANGUE",
            Endereco: "Rua Dr. Ovídeo Pires de Campos, 155 – Cerqueira César",
            Telefone: "(11) 4573-7731/7722",
        },
    2 : {
            Nome: "Hemocentro da Faculdade de Medicina de Marília",
            Endereco: "Rua Lourival Freire, 240 - Bairro Fragata",
            Telefone: "(14) 3434-3826/1868",
        },
    3: {
            Nome: "Centro de Hematologia e Hemoterapia ou Hemocentro de Campinas",
            Endereco: "Rua Carlos Chagas 480 - Cidade Universitária Prof. Zeferino Vaz – Distrito Barão Geraldo",
            Telefone: "(19) 3521-8627/8740",
        },
    4: {
            Nome: "Hemocentro de BOTUCATU",
            Endereco: "Avenida Professor Mário Rubens Guimarães Montenegro, s/nº - UNESP",
            Telefone: "(14) 38116041 - Ramal: 215/212",
        },
    5: {
            Nome: "Fundação Hemocentro de Ribeirão Preto",
            Endereco: "Rua Tenente Catão Roxo, 2501 - Monte Alegre",
            Telefone: "(16) 2101-9361",
        },
    6: {
            Nome: "Hemocentro de São José do Rio Preto",
            Endereco: "Avenida Jamil Feres Kfouri, 80 - Bairro Jardim Panorama",
            Telefone: "(17) 3201-5053",
        },
        7: {
            Nome: "Instituto Estadual Arthur de Siqueira Cavalcanti",
            Endereco: "Rua Frei Caneca 08 - Centro",
            Telefone: "(21) 2332-8620/8611 - Ramal: 2214",
        }, 
        8: {
            Nome: "Centro Estadual de Hemoterapia e Hematologia Marcos",
            Endereco: "Av. Marechal Campos, 1468 - Maruípe",
            Telefone: "(27) 3636-7921",
        }

}

export const GetSudeste = () =>{
    const values = Object.values(sudeste)
    console.log(values)

    return (
        <div>
            <div className="text-2xl font-bold flex flex-col mb-3">{values.map(value => <p className="mb-5">{[value.Nome + '\n' , value.Endereco, value.Telefone]}</p>)}</div>

        </div>
        
    )
}


 

