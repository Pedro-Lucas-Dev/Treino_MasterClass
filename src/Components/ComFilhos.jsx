import React from 'react'

export default props => {
    const{children} = props
    return(
        <div>

            <h2> Os Filhos: </h2>

            <div>
                { children }
            </div>

        </div>
    )
}