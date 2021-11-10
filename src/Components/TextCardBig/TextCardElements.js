import styled from "styled-components";


export const TextContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index:1;
`


export const TextContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Heading = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Description = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    max-width: 1000px;
    word-spacing: 5px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`
