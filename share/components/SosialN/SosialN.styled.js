import styled from 'styled-components';
import { css } from "styled-components";

export const HrerC = styled.a`
       font-size  : 20px;
       margin     : 30px 10px 30px 0px;
       font-weight: 600;
       ${({ color }) => css`
       color:${color ? 'white' : 'black'} !important;
`}
`