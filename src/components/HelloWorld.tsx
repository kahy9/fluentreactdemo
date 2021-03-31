import React from 'react'
import { Text } from "@fluentui/react";

const HelloWorld = ({id, start, end} : {id: string, start: string, end: string}) => {
    return (
        <Text id={id} variant="mega">
            {start} <span>{end}</span>
        </Text>
    )
}

export default HelloWorld
