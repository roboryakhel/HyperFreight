import React from 'react'
import { HeroContainer, HeroBG, ImageBG, HeroContent, HeroH1, HeroP, Img } from './HeroElements2'
// import Logo from '../../Images/Nav_logo.png'

const HeroSection = ({image, h1, par}) => {

    return (
        <HeroContainer id="Home">
            <HeroBG>
                <ImageBG src={image}/>
            </HeroBG>
            <HeroContent>
                <HeroH1>{h1}</HeroH1>
                <HeroP>{par}</HeroP>
                {/* <Img src={Logo}></Img> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
