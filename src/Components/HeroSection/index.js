import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import { HeroContainer, HeroBG, VideoBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowRight, ArrowForward, HFSpan } from './HeroElemets'
import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <HeroContainer id="Home">
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBG>
            <HeroContent>
                <HeroH1>Welcome to <HFSpan>HyperFreight Inc.</HFSpan>
                </HeroH1>
                <HeroP>Your Trusted Logistics Partner.</HeroP>
                <HeroBtnWrapper>
                    <Button to='Contact' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'>
                        Get In Touch {hover ?   <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
