import React from "react";
import {Container, Wrapper, Row, Box1, Box2, Img, Heading, Desc} from './CVElements'
import custPic from '../../Images/customers.svg'
import efficiency from '../../Images/efficiency.svg'
import safety from '../../Images/safety.svg'
import teamwork from '../../Images/teamwork.svg'

const CompanyValues = () => {

    return (
        <>
        <Container>
            <Wrapper>
                <Row>
                    <Box1>
                        <Img src={custPic}></Img>
                        <Heading>Customers</Heading>
                        <Desc>Ensuring professional and reliable customer service at all times.</Desc>
                    </Box1>
                    <Box2>
                        <Img src={safety}></Img>
                        <Heading>Safety</Heading>
                        <Desc>Ensuring the highest level of safety compliance in all aspects of our operation.</Desc>
                    </Box2>                    
                </Row>
                <Row>
                    <Box1>
                        <Img src={efficiency}></Img>
                        <Heading>Efficiency</Heading>
                        <Desc>Utilizing smart systems to design optimal routes to ensure on time delivery, saving you time and money.</Desc>
                    </Box1>
                    <Box2>
                        <Img src={teamwork}></Img>
                        <Heading>Teamwork</Heading>
                        <Desc>Working together to understand your business needs in order to provide solutions to help excel your business.</Desc>
                    </Box2>
                </Row>
            </Wrapper>
        </Container>
        </>
    );
};
export default CompanyValues;