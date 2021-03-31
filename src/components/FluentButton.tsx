import React from 'react'
import { PrimaryButton } from "@fluentui/react";


const FluentButton = ({content} : {content: string}) => {
    return (
        <PrimaryButton
        onClick={() => alert("Hello, World!")}
        >
            {content}
        </PrimaryButton>
    )
}

export default FluentButton
