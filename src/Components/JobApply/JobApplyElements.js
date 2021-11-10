import styled from 'styled-components'


export const JAppContainer = styled.div`
    --background: #0c0c0c;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    --height: 400px;
    position: relative;
    z-index:1;
`;

export const JAppWrapper = styled.div`
    --z-index:3;
    max-width: 1200px;
    --position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0 100px 0;

`;

export const JAppDescBox = styled.div`
--margin-top: 100px;

`;

export const JAppTitle = styled.h1`

    --color: #fff;
    font-size: 48px;
    --text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }


`;

export const JAppDesc = styled.p`
    margin-top: 24px;
    --color: #fff;
    font-size: 16px;
    --text-align: center;
    max-width: 750px;
    word-spacing: 5px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }

`;

export const JAppRegForm = styled.div`
    padding-top:40px;
    width:100%;
`;

export const Label = styled.p`
    padding-top:20px;
    padding-bottom:20px;
`;

export const JAppName = styled.div`
    display: flex;
    flex-direction: row;
    padding-top:0px;
`;

export const FName = styled.input`
    padding-top:0px;
    margin-right: 20px;
    font-size:14px;
    padding:12px;
    width: 50%;
`;

export const LName = styled.input`
    padding-top:0px;
    margin-left: 20px;
    padding:12px;
    width: 50%;
`;


export const JAppEmail = styled.input`
padding-top:0px;
padding:12px;
width: 100%;
`;

export const JAppPhone = styled.input`
padding-top:0px;
padding:12px;
width: 100%;
type: "tel";
placeholder:"647-123-1234";

`;

export const JAppExperience = styled.select`
padding:12px;
width:50%;
`;

export const SendBtnWrapper = styled.div`
    padding: 80px 0px 0 0px;
    width: 50%;


`;


export const ResumeUpload = styled.input`


`

export const UploadBtnlabel = styled.label`
width:50%;
border-radius: 30px;
background: ${ ({primary}) => (primary ? '#6aabb159' : '#010606') };
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${ ({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items:center;
text-decoration:none;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
}
`
