import React from 'react'
import { TextContainer, TextContent, Heading, Description } from './TextCardElements' 

const TextCardBig = ({heading, desc1, desc2}) => {
    return (
        <>
            <TextContainer>
                <TextContent>
                    <Heading>{heading}</Heading>
                    <Description>{desc1}</Description>
                    <Description>{desc2}
                    </Description>
                </TextContent>
            </TextContainer>
        </>
    )
}

export default TextCardBig