import styled from 'styled-components';
import { css } from "styled-components";

export const AllWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`

export const ImgWrap = styled.div`
width: 25%;
height: auto;
position: relative;
transition: .3s;
&:hover Img{
    z-index: 0; 
}
`
export const Img = styled.img`
width: 100%;
z-index: 3;
transition: .3s;
position: relative;
`
export const Img1 = styled.img`
width: 100%;
position: absolute;
transition: .3s;
top: 0;
left: 0;
`

