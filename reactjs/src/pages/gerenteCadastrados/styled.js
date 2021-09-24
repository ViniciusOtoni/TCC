import styled from "styled-components";




const StyledGerenteCadastrados = styled.div`


main {
    width: 1240px;
    margin: auto;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 5em;
}


 tr:nth-child(2n){
    background-color: #282828;
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

.buttonADM{
    margin-right: 20%; 
    width: 10em;
}


@media (max-width: 375px) { 

    main{
        width: 375px;
    }
  
    .table-responsive {
       display: flex;
       flex-direction: row;
    }

    thead{
        display: flex;
        flex-direction: column;

        font-size: .8em;
    }    

    th{
        padding: 0px;
        width: 1em;
        margin: 1em 0em;
    }

    tr:nth-child(n+2):nth-child(-n+10){
        display: none;
    }

    tr{
        display: flex;
        flex-direction: column;
        margin: 0em;

        background-color: transparent;
    }

    th:nth-child(6)::before{
    content: 'Visualizar:'
    }

    th:nth-child(7)::before{
        content: "Editar:";
    }

    th:nth-child(8)::before{
        content: 'Excluir:'
    }

    td{
        border-collapse: unset;
        margin: 1.2em 8em;
        background-color: rgb(40, 40, 40);
        
    }

    .footer{
        display: flex;
        flex-direction: column-reverse;
        align-items: normal;
        justify-content: center;
        margin-top: 0px;
    }

    .buttonADM{
        margin-left: 9em;
        margin-top: 1em;
        width: 10em;
    }

}
`
export { StyledGerenteCadastrados }