let nordeste = [
  {
    Nome: "Fundação de Hematologia e Hemoterapia da Bahia",
    Endereco: "Ladeira do Hospital Geral - Andar 2º - Brotas",
    Telefone: "(71) 3116-5690",
  },

  {
    Nome: "Centro de Hematologia e Hemoterapia de Alagoas",
    Endereco: "Av. Jorge de Lima, 58 -Trapiche da Barra",
    Telefone: "(82) 3326-9854",
  },

  {
    Nome: "Centro de Hemoterapia de Sergipe",
    Endereco:
      "Centro Administrativo Gov. Augusto Franco, Rua Quinze, S/N, B. Capucho",
    Telefone: "(79) 3225-8003/8002",
  },
  {
    Nome: "Centro de Hematologia e Hemoterapia da Paraíba",
    Endereco: "Av. D. Pedro II, 1119 – Torre",
    Telefone: "(83) 3133-3470/3413",
  },

  {
    Nome: "Centro de Hematologia e Hemoterapia do Maranhão",
    Endereco: "Rua 5 de Janeiro, s/nº- Jordoá",
    Telefone: "(98) 3216-1139 (98) 3216-1100 / 1106",
  },

  {
    Nome: "Centro de Hematologia e Hemoterapia do Rio Grande do Norte Dalton Cunha",
    Endereco: "Av. Alexandrino de Alencar, 1.800 - Tirol",
    Telefone: "(84) 3232-6701",
  },

  {
    Nome: "Centro de Hematologia e Hemoterapia do Piauí",
    Endereco: "Rua 1º de Maio, 235 - Centro",
    Telefone: "(86) 3221-8320/8319",
  },

  {
    Nome: "Fundação de Hematologia e Hemoterapia de Pernambuco",
    Endereco: "Rua Capibaribe, 147 – 5º andar – Prédio ATI – Bairro São José",
    Telefone: "(81) 3182 4912",
  },

  {
    Nome: "Centro de Hematologia e Hemoterapia do Ceará",
    Endereco: "Av. José Bastos, 3.390 - Rodolfo Teófilo",
    Telefone: "(85) 3101-2293/2275",
  },
];

export const getNordeste = () => {
    for (let index = 0; index < nordeste.length; index++) {
        const element = JSON.stringify(nordeste[index]);
        JSON.parse(element, (key,value)=>{
          if ( typeof value == 'string'){
            return value.toUpperCase();
          }
        })
        console.log('\n' + element)
    }
}