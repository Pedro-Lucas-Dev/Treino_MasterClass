import React from 'react'

export default props => {
    return(
        <>
            <a
                className="App-link"
                href={ props.url }
                target="_blank"
                rel="noopener noreferrer"
            >
             { props.text }
            </a>
        </>
    )
}