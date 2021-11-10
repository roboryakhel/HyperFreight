import React from 'react'
import { TextContainer, TextContent, Heading, Description } from './TextCardElements' 

const TextCardBig = () => {
    return (
        <>
            <TextContainer>
                <TextContent>
                    <Heading>What We Do</Heading>
                    <Description>We are asset based service provider with a dedicated team 
                        trained to offer you the most optimized solution for your business. 
                        We offer a wide range of over the road services like Full Truck Load
                         (FTL), Less Than Truckload (LTL), specialized and expedited.
                         </Description>
                         <Description> If you 
                         needs include fresh produce,  pharmaceuticals, fresh or frozen meats, 
                         papers rolls, Automotive or any other dry or Temperature Controlled 
                         Freight, We’ve got you covered. We pride ourselves on competitive and on-time services.
                         </Description>
                </TextContent>
            </TextContainer>
        </>
    )
}

export default TextCardBig