import styled from "styled-components";

const StyledPopup = styled.div`

background-color: #333333;
width: 400px;
color: #ffffff;


header {
    display: flex;
    flex-direction: row;
    background-color: #000000;
    color: #ffffff;
    width: 400px;
}

.email {
    font-family: MontserratBold;
}

.senha {
    font-family: MontserratBold;
}

.esqueceu-email {
    font-family: Medio;
}

.esqueceu-senha {
    font-family: Medio;
}
`

export { StyledPopup }