import styled from "styled-components";

const StyledEntregaItem = styled.div `

    


.agp-cima  {
    display: flex;
    flex-direction: column;
    margin-top: 7em;
}

.row-cima {
    display: flex;
    flex-direction: row;
    justify-content: space-around
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
}

.carregamento {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2em;
    margin-right: 1em;
}

.definicao1 {
text-align: center;
color: #ffffff;
font-family: MontserratBold;
width: 9em;
padding-top: 0.4em;
padding-bottom: 1em;

}

.definicao2 {
text-align: center;
color: #ffffff;
font-family: MontserratBold;
padding-top: 0.4em;
padding-bottom: 1em;
}


.definicao3 {
text-align: center;
color: #ffffff;
font-family: MontserratBold;  
padding-top: 1em;
padding-bottom: 1em;
}

.limite1 {
    background-image: url('/assets/images/icon-check.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
}

.limite2 {
    background-image: url('/assets/images/icon-check.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
}


.limite3 {
    background-image: url('/assets/images/icon-check.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
}

.load-bar {
    background-color: #ffffff;
    border-radius: 2em;
    width: auto;
    height: 2em;
   
  

 
  
}

.icon img {
    width: 8em;
    height: 8em;
}


.agp-baixo {
    display: flex;
    flex-direction: column;
}

.status {
    display: flex;
    flex-direction: column;
    margin-top: 5em;
}

.row-status {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.titulo {
    font-size: 29px;
    color: #ffffff;
    font-family:  MontserratBold;
    padding-bottom: 1em;
}

.botao-check button {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    text-decoration: none;
    border: none;
    background-color: #ffffff;
    background-image: url('/assets/images/check.svg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
}

.texto-status {
    color: #ffffff;
    font-size: 16px;
    font-family: MontserratBold;
    width: 12em;
    padding-left: 1em;

}

.horario-status {
    color: #ffffff;
    font-size: 16px;
    font-family: MontserratBold;
}

.voltar button {
  background-color: #D9534F;
  color: #ffffff;
  border: none;
  font-size: 15px;
  font-family: MontserratBold;
  width: 9em;
  height: 2em;
  border-radius: .3em;
  text-align: center;
}

.voltar {
    margin-top: 7em;
    padding-bottom: 2.84em;
}


`

export { StyledEntregaItem }