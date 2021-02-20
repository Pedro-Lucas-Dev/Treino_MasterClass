import React from 'react'

export default props => {
    const prod = () => {
        return props.produtos.map((produto) => {
                return(
                    <li key={produto.id}>{produto.nome} R$ {produto.preco}</li>
                )
            }
        )
    }

    const {titleRepetition} = props;

    return(
        <div>
            <h2> {titleRepetition} </h2>
            <ul>
               {prod()}
            </ul>
        </div>
    )
}