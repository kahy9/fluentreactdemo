import React from 'react'

const HelloWorld = ({id, start, end} : {id: string, start: string, end: string}) => {
    return (
        <h1 id={id}>
            {start} <span>{end}</span>
        </h1>
    )
}

export default HelloWorld
