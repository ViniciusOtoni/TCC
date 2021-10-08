import styled from "styled-components";

const StyledPopupBig = styled.div `

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
}

.column {
    display: flex;
    flex-direction: column;
    padding: 2em;
}

.nome {
    font-family: MontserratBold;
    padding-bottom: 0.4em;
}

.email {
    
    font-family: MontserratBold;
    padding-bottom: 0.4em;
    padding-top: 2em;
}



.senha {
    font-family: MontserratBold;
    padding-bottom: 0.4em;
    padding-top: 2em;
}

.repita {
    font-family: MontserratBold;
    padding-bottom: 0.4em;
    padding-top: 2em;
}

.img {
   
    font-family: MontserratBold;
    padding-bottom: 0.4em;
    padding-top: 2em;
}

.input  input{
    width: 100%;
    height: 3em;
    color: #000000;
}

.butao {
    margin-top: 2em;
    text-align: center;
}
`

export { StyledPopupBig }