import styled from "styled-components";

const Vizualizar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    height: 100vh;

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .align-header{
        display: flex;
        flex-direction: row;
    }

    .logo{

    }

    .title{
        font-family: MontserratBold;
        color: #F0AC54;
        font-size: 1.5em;
        margin-top: .5em;
    }

    .content{
        display: flex;
        flex-direction: column;

        margin: 5em 0em;
    }

    .line{
        display: flex;
        flex-direction: row;
        align-items: center;


        height: 2em;
    }

    .line > div {
        font-family: Medio;
        color: white;
        margin-left: 1em;
    }


    .alternating{
        background-color: #282828;
    }

    .footer{}

    .button{
        padding: .7em 2.5em;
    }
`

export { Vizualizar }