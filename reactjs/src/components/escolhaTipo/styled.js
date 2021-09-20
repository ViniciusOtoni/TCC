import styled from "styled-components";

const StyledEscolha = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #282828;
    padding: 3.4em;
    margin-bottom: 2em;
    border-radius: 1em;
    height: 22em;
    cursor: pointer;
    

    .imagem-categoria img{
        cursor: pointer;
    }

    .titulo-categoria {
        color: #F0AC54;
        background-color: #333333;
        font-size: 25px;
        width: 140px;
        text-align: center;
        margin-bottom: 2em;
        margin-top: 0.4em;
        border-radius: 0.2em;
        font-family: MontserratBold;
        cursor: pointer;
    }

    .desc-categoria {
        color: #ffffff;
        font-size: 1.3em;
        margin-bottom: 2em;
        width: 7em;
        text-align: center;
        font-family: MontserratBold;
    }

    .desc-categoria:hover{
        text-decoration: underline;
        cursor: pointer;
    }




`

export { StyledEscolha }