import React from 'react'
import { TextContainer, TextContent, Heading, Description } from './TextCardElements' 

const TextCardBig = () => {
    return (
        <>
            <TextContainer>
                <TextContent>
                    <Heading>Who We Are</Heading>
                    <Description>At HyperFreight Inc. our goal as your trusted logistics partner is to ensure that we deliver your promises on time.</Description>
                    <Description>Our management philosophy incorporates smart systems in our daily operations to capture real-time information in order to create efficient and cost-effective logistics solutions for our valued customers.
                    </Description>
                </TextContent>
            </TextContainer>
        </>
    )
}

export default TextCardBig