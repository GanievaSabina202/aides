import styled from 'styled-components';
import { css } from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media(max-width: 991.9px){
    flex-wrap: wrap;
}
`
export const ImgWrap = styled.div`
width: 50%;
height: 560px;
    ${({ order }) => css`
    order:${order ? '2' : '0'} !important;
    `}

@media(max-width: 991.9px){
    width: 100%;
    height: auto;
    }
`
export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
export const Content = styled.div`
width: 50%;
padding:0px 6% 30px 4% !important;
color: #000;
    @media(max-width: 991.9px){
        width: 100%;
        padding: 50px 10% 50px 17% !important;
    }
`
export const Title = styled.div`
font-size: 50px;
line-height: 1.06em;
font-weight: 600;
@media(max-width: 767.9px){
    font-size: 45px;
}
`
export const Hr = styled.div`
height: 4px;
width: 69px;
background: black;
margin: 19px 0px;
`
export const Desc = styled.div`
font-size: 17px;
line-height: 1.52em;
font-weight: 400;
margin: 12px 0px 38px;
`

