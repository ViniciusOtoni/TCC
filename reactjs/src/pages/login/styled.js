import styled from "styled-components";

const StyledPopupTela = styled.div `

background-image: url('/assets/images/fundoTCC.png');
background-size: 100% 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

@media (max-width:375px) {
    background-image: none;
    height: auto;
}
`

export { StyledPopupTela }