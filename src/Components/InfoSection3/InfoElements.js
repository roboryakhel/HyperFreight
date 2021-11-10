import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${ ({lightBg}) => (lightBg ? '#f9f9f9' : '#010606') };

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index:1;
    max-height: 1000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    // grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    padding-top: 50px;
    // grid-template-areas: ${ ({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    grid-template-columns: 1fr 1fr 1fr;

    // @media screen and (max-width: 768px) {
    //     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    // }
`;

export const Column1 = styled.div`
    // margin-bottom: 15px;
    // padding: 0 15px;
    // grid-area: col1;
    margin-right: 30px;
    background-color: gray;
    width: 400px;

`;
export const Column2 = styled.div`
    // margin-bottom: 15px;
    // padding: 0 15px;
    // grid-area: col2;
    background-color: gray;
    width: 400px;

`;

export const Column3 = styled.div`
    // margin-bottom: 15px;
    // padding: 0 15px;
    // grid-area: col3;
    background-color: gray;
    width: 400px;
    margin-left: 30px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading  = styled.h1`
    margin-bottom:24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    text-align:center;
    color: ${({lightText})=>(lightText ? '#f7f8fa':'010606')};

    @media screen and (max-width:480px) {
        font-size:32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom:35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;
export const BtnWrap = styled.div`
    display:flex;
    justify-content: 100%;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;