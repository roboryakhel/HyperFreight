import React from 'react'
import {Button} from '../ButtonElement';
import { Column2, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, Column3 } from './InfoElements';

const InfoSection3 = ({...threeColRow}) => {
    // console.log(threeColRow)
    return (
        <>
            <InfoContainer lightBg={threeColRow.homeObj1.lightBg}>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                        </TextWrapper>
                        <TextWrapper>
                            <Heading lightText={false}>What We Do</Heading>
                        </TextWrapper>
                        <TextWrapper>
                        </TextWrapper>
                    </InfoRow>
                    <InfoRow imgStart={threeColRow.homeObj1.imgStart}>
                        <Column1>
                            <ImgWrap>
                                <Img src={threeColRow.homeObj2.img} alt={threeColRow.homeObj2.alt} />
                            </ImgWrap>
                            <TextWrapper>
                                <TopLine>{threeColRow.homeObj1.topLine}</TopLine>
                                <Heading lightText={threeColRow.homeObj1.lightText}>{threeColRow.homeObj1.headline}</Heading>
                                <Subtitle darkText={threeColRow.homeObj1.darkText}>{threeColRow.homeObj1.description}</Subtitle>
                                <BtnWrap>
                                    <Button to="/Home" > {threeColRow.homeObj1.buttonLabel} </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={threeColRow.homeObj2.img} alt={threeColRow.homeObj2.alt} />
                            </ImgWrap>
                            <TextWrapper>
                                <TopLine>{threeColRow.homeObj2.topLine}</TopLine>
                                <Heading lightText={threeColRow.homeObj2.lightText}>{threeColRow.homeObj2.headline}</Heading>
                                <Subtitle darkText={threeColRow.homeObj2.darkText}>{threeColRow.homeObj2.description}</Subtitle>
                                <BtnWrap>
                                    <Button to="/Home" > {threeColRow.homeObj2.buttonLabel} </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column2>
                        <Column3>
                            <ImgWrap>
                                <Img src={threeColRow.homeObj2.img} alt={threeColRow.homeObj2.alt} />
                            </ImgWrap>
                            <TextWrapper>
                                <TopLine>{threeColRow.homeObj3.topLine}</TopLine>
                                <Heading lightText={threeColRow.homeObj3.lightText}>{threeColRow.homeObj3.headline}</Heading>
                                <Subtitle darkText={threeColRow.homeObj3.darkText}>{threeColRow.homeObj3.description}</Subtitle>
                                <BtnWrap>
                                    <Button to="/Home" > {threeColRow.homeObj3.buttonLabel} </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column3>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection3
