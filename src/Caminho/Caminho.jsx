import {React, useState} from 'react'
import Step from './Step'

const Caminho = () => {
    const t1 = "1. Sangue coletado"
    const te1 = "É realizada a retirada do sangue por parte do doador."
    const t2 = "2. São Realizados testes sorológicos"
    const te2 = "O sangue doado passa por uma análise para garantir a segurança."
    const t3 = "3. Divisão de hemocomponentes; hemácias, plaquetas e plasma"
    const te3 = "O sangue passa por uma separação de todos os componentes."
    const t4 = "4. O sangue é armazenado em temperatura adequada"
    const te4 = "O sangue é encaminhado a um armazém para ficar sobre controle de temperatura."
    const t5 = "5. Aguarda a liberação dos testes sorológicos"
    const te5 = "Com a saída dos resultados dos testes o sangue é liberado ou não para o receptor."
    const t6 = "6. Distribuição"
    const te6 = "O sangue é distribuído em todos os bancos de sangue naquela região."
    const t7 = "7. Bolsas de sangue vão para agências transfusionais"
    const te7 = "O sangue é entregue aos pontos onde se encontraram receptores para aquele tipo."
    const t8 = "8. Sangue chega aos pacientes para a transfusão "
    const te8 = "O receptor realiza a transfusão do sangue."

    return (
        <div className="h-screen static">
            <h1 className="text-primary font-bold text-6xl py-10">Caminho do sangue no processo de doação</h1>
            <div className="flex static">
                <Step title={t1} text={te1}/>
                <Step title={t2} text={te2} />
                <Step title={t3} text={te3} />
                <Step title={t4} text={te4} />
                <Step title={t5} text={te5}/>
                <Step title={t6} text={te6} />
                <Step title={t7} text={te7} />
                <Step title={t8} text={te8} />
            </div>
        </div>
        
    )
    
}

export default Caminho
