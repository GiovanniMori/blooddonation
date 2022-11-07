let sudeste = [
    {
            Nome: "Fundação PRÓ-SANGUE",
            Endereco: "Rua Dr. Ovídeo Pires de Campos, 155 – Cerqueira César",
            Telefone: "(11) 4573-7731/7722",
        },
    {
            Nome: "Hemocentro da Faculdade de Medicina de Marília",
            Endereco: "Rua Lourival Freire, 240 - Bairro Fragata",
            Telefone: "(14) 3434-3826/1868",
        },
    {
            Nome: "Centro de Hematologia e Hemoterapia ou Hemocentro de Campinas",
            Endereco: "Rua Carlos Chagas 480 - Cidade Universitária Prof. Zeferino Vaz – Distrito Barão Geraldo",
            Telefone: "(19) 3521-8627/8740",
        },
    {
            Nome: "Hemocentro de BOTUCATU",
            Endereco: "Avenida Professor Mário Rubens Guimarães Montenegro, s/nº - UNESP",
            Telefone: "(14) 38116041 - Ramal: 215/212",
        },
    {
            Nome: "Fundação Hemocentro de Ribeirão Preto",
            Endereco: "Rua Tenente Catão Roxo, 2501 - Monte Alegre",
            Telefone: "(16) 2101-9361",
        },
    {
            Nome: "Hemocentro de São José do Rio Preto",
            Endereco: "Avenida Jamil Feres Kfouri, 80 - Bairro Jardim Panorama",
            Telefone: "(17) 3201-5053",
        },
        {
            Nome: "Instituto Estadual Arthur de Siqueira Cavalcanti",
            Endereco: "Rua Frei Caneca 08 - Centro",
            Telefone: "(21) 2332-8620/8611 - Ramal: 2214",
        }, 
        {
            Nome: "Centro Estadual de Hemoterapia e Hematologia Marcos",
            Endereco: "Av. Marechal Campos, 1468 - Maruípe",
            Telefone: "(27) 3636-7921",
        }

]

export const getSudeste = () =>{
    for (let index = 0; index < sudeste.length; index++) {
        const element = sudeste[index];
        console.log('\n' + JSON.stringify(sudeste[index]))
        return element.map((elem) => <li>{elem}s</li>)
    }

    return (
        <ol>
            {element.map((elem)=> (
                <li className="text-3xl" key={elem}>{elem}</li>
            ))}
        </ol>
    )
}


 

