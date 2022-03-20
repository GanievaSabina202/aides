import styled from 'styled-components';
import { css } from "styled-components";

export const ButtonWrap = styled.a`
background-color: #000;
border: 2px solid transparent;
padding: 13px 44px 14px;
color: #fff;
text-transform: uppercase;
font-size: 15px;
line-height: 1.47em;
font-weight: 700;
transition: .3s;
    ${({ bg }) => css`
    background-color:${bg ? 'white' : 'black'};
    color:${bg ? 'black' : 'white'};
    border:${bg ? '2px solid black' : '2px solid white'};
    `}
    &:hover{
    background-color: #fff;
    border: 2px solid black;
    color: #000;
    }

`
