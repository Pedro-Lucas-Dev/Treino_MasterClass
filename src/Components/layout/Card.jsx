import './Card.css'
import React from 'react'

export default props => {
    const{titulo, children} = props
    return(
        <div className="Card">
            <div className="Conteudo">
                {children}
            </div>
            <div className=" Footer ">
                {titulo}
            </div>
        </div>
    )
}