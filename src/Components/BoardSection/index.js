import React from 'react'
import { BoardContainer, BoardWrapper, BoardRow, Column1, Column2, ImgWrap, Img, TextWrap, Title, Desc } from './BoardElements'
import PIC from '../../Images/contact.jpg'

const BoardSection = () => {
    return (
        <>
            <BoardContainer lightBg={true}>
                <BoardWrapper>
                    <BoardRow>
                        <Column1>
                            <ImgWrap>
                                <Img src={PIC} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrap>
                                <Title lightText={false}>Practice Makes Perfect</Title>
                                <Desc darkText={true}>
                                    We know about your hectic schedule. We also know the only way
                                     you truly understand a subject is by practicing it in a real 
                                     environment. This is why we’ve documentation and certifications 
                                     for customs satisfaction like CTPAT, FAST, Bonded carrier. Contact us for Details.
                                </Desc>
                            </TextWrap>
                        </Column2>
                    </BoardRow>
                
                    <BoardRow>
                        <Column1>
                            <TextWrap>
                            <Title lightText={false}>Practice Makes Perfect</Title>
                                <Desc darkText={true}>
                                    We know about your hectic schedule. We also know the only way
                                     you truly understand a subject is by practicing it in a real 
                                     environment. This is why we’ve documentation and certifications 
                                     for customs satisfaction like CTPAT, FAST, Bonded carrier. Contact us for Details.
                                </Desc>
                            </TextWrap>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={PIC}/>
                            </ImgWrap>
                        </Column2>
                    </BoardRow>
                    </BoardWrapper>
            </BoardContainer>
        </>
    )
}

export default BoardSection
