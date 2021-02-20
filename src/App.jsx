import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import produtos from './data/produtos'

export default props => {
    const nomes = ["Ana", "Bia", "Carlos", "Daniel"]
    return(
        <div className="App">
            <Card titulo=" #04 = Repetição">
                <Repeticao 
                    produtos={produtos}
                    titleRepetition=" ALOUUUU "
                />
            </Card>
            <Card titulo="#03 - Componente Com Filhos ">

                <ComFilhos>
                    <ul>
                        {nomes.map((nome) => 
                            <li key={nome}>{nome}</li>
                        )}    
                    </ul>
                </ComFilhos>

            </Card>

            <Card titulo="#02 - Componente Com Paramentro ">

                <ComParamentro 
                    titulo="Esse é o título"
                    subtitulo=" Esse é o subtitulo"
                />
                <ComParamentro 
                    titulo=" Opa "
                    subtitulo=" Epa "
                />

            </Card>

            <Card titulo="#01 - Primeiro Componente ">
                <Primeiro />
            </Card>
            

            {/**/}

            {/*<Primeiro />

            

            
            />*/}

    </div>
    )
}