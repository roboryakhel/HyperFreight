import react from "react";
import {Container, Wrapper, Row, Box1, Box2, Box3, Img, Heading, Desc} from './Elements'



const DryVanTransportation = () => {
    return (
        <>
        <Container>
            <Wrapper>
                <Row>
                    <Box1>
                        <Img ></Img>
                        <Heading>Retail</Heading>
                        <Desc>Ensuring professional and reliable customer service at all times.</Desc>
                    </Box1>

                    <Box2>
                        <Img ></Img>
                        <Heading>Manufacturing</Heading>
                        <Desc>Ensuring the highest level of safety compliance in all aspects of our operation.</Desc>
                    </Box2>    

                    <Box3>
                        <Img ></Img>
                        <Heading>Auto Parts</Heading>
                        <Desc>Ensuring the highest level of safety compliance in all aspects of our operation.</Desc>
                    </Box3>    
                </Row>
                <Row>
                    <Box1>
                        <Img ></Img>
                        <Heading>Non-perishible Goods</Heading>
                        <Desc>Utilizing smart systems to design optimal routes to ensure on time delivery, saving you time and money.</Desc>
                    </Box1>
                    <Box2>
                        <Img ></Img>
                        <Heading>Furniture</Heading>
                        <Desc>Working together to understand your business needs in order to provide solutions to help excel your business.</Desc>
                    </Box2>

                    <Box3>
                        <Img></Img>
                        <Heading>Building & Packaging Materials</Heading>
                        <Desc>Ensuring the highest level of safety compliance in all aspects of our operation.</Desc>
                    </Box3>    
                </Row>
            </Wrapper>
        </Container>
        </>
    );
}

export default DryVanTransportation;