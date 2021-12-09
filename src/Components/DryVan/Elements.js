import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:600px;
    position:relative;
`
export const Wrapper = styled.div`
    width:60%;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:space-between;
    position:absolute;
    top: 50%;
    left:20%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

export const Row = styled.div`
    padding-top:40px;
    padding-bottom:40px;
    display:flex;
    flex-direction:row;
    align-items:space-between;
`
export const Box1 = styled.div`
    width:200px;
    height:200px;
    margin:auto;
    // padding:20px;
    // background-color:black;
    // border:2px solid black;
`
export const Box2 = styled.div`
    width:200px;
    height:200px;
    margin:auto;
    // padding:20px;
    // background-color:black;
    // border:2px solid black;
`

export const Box3 = styled.div`
    width:200px;
    height:200px;
    margin:auto;
    // padding:20px;
    // background-color:black;
    // border:2px solid black;
`

export const Img = styled.img`
    width: 90px;
    height: 80px;
    align-item:center;
    margin-left:35%;
`

export const Heading = styled.h3`
    text-align: center;
    margin-bottom:10px;

`
export const Desc = styled.p`
    text-align:center;

`
