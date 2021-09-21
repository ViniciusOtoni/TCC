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

.email {
    font-family: MontserratBold;
    padding-bottom: 0.4em;
}


.senha {
    font-family: MontserratBold;
    padding-bottom: 0.4em;
    padding-top:${props => props.recuSenha === 'true' ? '2em' : '0em'} ;

}

.esqueceu-email {
    font-family: Medio;
    font-size: 0.8em;
    text-align: right;
    padding-top: 0.7em;
    display: ${props => props.recuSenha === 'true'  ? 'none' : 'block' };
   
}

.esqueceu-email:hover {
    text-decoration: underline;
    cursor: pointer;
}

.esqueceu-senha {
    font-family: Medio;
    font-size: 0.8em;
    text-align: right;
    padding-top: 0.7em;
    display: ${props => props.recuSenha === 'true'  ? 'none' : 'block' };
   
}
.esqueceu-senha:hover {
    text-decoration: underline;
    cursor: pointer;
}

.agp-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
}

.agp-botao {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.botao1 {
    margin-top: 2em;
    display: ${props => props.recuSenha === 'true'  ? 'none' : 'block' };
}

.botao2 {
    margin-top: 1em;
    display: ${props => props.recuSenha === 'true'  ? 'none' : 'block' };
   
}

.botao3 {
    margin-top: 1em;
    padding-top:${props => props.recuSenha === 'true' ? '2em' : '0em'};
}
`

export { StyledPopup }