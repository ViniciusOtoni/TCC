import styled from "styled-components";




const StyledGerenteCadastrados = styled.div`




.pc{
    width: 1240px;
    margin: auto;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 5em;
}



th {
    color: #ffffff;
    font-size: 2em;
    font-family: MontserratBold;
    text-align: left;
    padding-bottom: 1em;
}

td {
    color: #ffffff;
    font-size: 1em;
    font-family: MontserratBold;
    text-align: left; 
}

td {
    padding: 1em 0em;
}

.footer {
   displaY: flex;
   flex-direction: row;
   align-items: center;
   margin-top: 4em;
}

.cell {
    display: none;
}

@media(max-width:375px) {
        .pc {
            display: none;
        }

        .cell {
            display: block;
            width: 100%;
        }

        .line-gray {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-top: 3em;
            padding-left: 1em;
           
            height: 4em;
        }

        .line-black {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 3em;
            padding-left: 1em;
            background-color: #282828;
            height: 4em;
        }

        .coluna {
            color: #ffffff;
            font-size: 1.4em;
            font-family: MontserratBold;
            padding-right: 2em;
        }

        .valor-coluna {
            color: #ffffff;
            font-size: 1em;
            font-family: MontserratBold;
            
        }

        .styled {
            width: 100%;
            height: auto;
        }

        .styled2 {
            width: 100%;
            height: auto;
            margin-left: 3.2em;
        }


        .styled3 {
            width: 100%;
            height: auto;
            margin-left: 2.2em;
        }


        .pag {
            margin-top: 4em;
        }

        .back {
            margin-top: 2em;
            background-color: #282828;
            padding: 2em;
           padding-left: 7em;
        }
    }

   
`
export { StyledGerenteCadastrados }