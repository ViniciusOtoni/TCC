import styled from "styled-components";

const StyledPopup = styled.div`

background-color: #333333;
width: 400px;
color: #ffffff;
border-radius: 1em;
display: flex;
flex-direction: column;



header {
    display: flex;
    flex-direction: row;
    background-color: #000000;
    color: #ffffff;
    width: 400px;
    align-items: center;
    border-radius: 1em 1em 0em 0em;
    border-bottom: none;
}


.logo {
    padding-top: 1em;
}

.titulo {
    font-family: MontserratBold;
    font-size: 2em;
}

.pedidos {
    font-family: MontserratBold;
    font-size: 1.2em;
    padding-top: 2em;
}

.agp-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
}

.agp-botao {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.botao1 {
    margin-top: 1.5em;
    display: ${props => props.recuSenha === 'true'  ? 'none' : 'block' };
}


@media(max-width:425px) {
    width: 100%;
   

    header {
        width: 100%;
    }
}
`

export { StyledPopup }