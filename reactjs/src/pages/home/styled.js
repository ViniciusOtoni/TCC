import styled  from "styled-components";



const StyledConteudo = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #333333;
    position: relative;
    & * {z-index : 11;}
  

    main  {
        width: 1240px;
        margin: auto;

    }

    .bolota {
        max-width: 1340px;
        margin: auto;
    }

    .texto-melhor {
     font-family: MontserratBold;
     color: white;
     font-size: 3.4em;
     text-align: center;

    }

    .saiba-mais {
        margin-top: 3em;        
        
    }
    

    .agp-melhor {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-left: 6em;

        animation: bounceInLeft 1.4s;
    }

    .logo > img {
        animation: animate 2.5s ease-in-out infinite;
        width: 15em;
        height: 15em;
    }

    @keyframes animate{
        0%{
            transform: translatey(0px);
        }

        50%{
            transform: translatey(-40px);
        }

        100%{
            transform: translatey(0px);
        }
    };

    .bolota {
        position:absolute;
        top: -33em;
        right: 0em;
        z-index: -1;
        
        overflow: hidden;
        width: 60%;
        height: 100%;
    }
  

    .a5 {
        margin-bottom: 5em;
    }
  

    .row {
        display: flex;
        flex-direction: row;
        margin-top: 8em;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6em;
        width: 70em;
    }

    .agp-jogo {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 4em;
        
    }

    .carousel.carousel-slider{
        height: 29em;
    }


    .titulo {
        font-family: ExtraBold;
        font-size: 2.8em;
        color: white;

        padding-left: 1em;
       
    }

    
   

   .barra { 
       border: 4px solid #F0AC54;
        width: 23em;
        margin-left: 3em;
        margin-bottom: 4em;
   }

   .faixa3 {
       display: flex;
       flex-direction: column;
       justify-content: space-center;
       align-self: center;
       margin-top: 7em;
   }

   .column {
       display: flex;
       flex-direction: column;
   }

   .a1 {
       margin-right: 12em;
   }

   .a2 {
       margin-right: 12em;
   }

   .row2 {
       display: flex;
       flex-direction: row;
       justify-content: center;
   }

   .a4 {
       margin-right: 12em;
   }

  
   .teste {
    width:224px; 
    height:68px; 
    padding-top:1em;
   }

   .cell {
       display: none;
   }

   .react-multiple-carousel__arrow--left {
    left: 0em;
}

.react-multiple-carousel__arrow--right {
    right: 5.8em;
}

.react-multi-carousel-dot-list {
    margin-right: 5em;
}

.agp-jogo {
    height: 30em;
    
}

.pc {
    margin-left: 2em;
}


   
   
   
        @media(max-width:375px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0em;
            padding: 0em;
            background-image: url('/assets/images/logo.svg');
            background-repeat: no-repeat;
            background-position-y: 2em;
            background-position-x: 8em;

            .cell {
                display: block;
                margin: 0em;
            }

            .pc {
                display: none;
            }

           main {
               width: 100%;
           }
            
           .logo img {
               display: none;
           }
            .row {
               display: flex;
               justify-content: center;
               align-items: center;
               width:100%;
               padding: 0em;
               margin: 0em;
            }
           
            .texto-melhor {
                font-size: 2em;
            }

            .jpWpPU {
                        margin: 4em;
                    }
           
            .teste {
            width:8em; 
            height: 2.4em; 
            padding: .3em;
            font-size: 1em;
            margin-bottom: 1em;
            }

            .carousel-status {
                font-family: MontserratBold;
                margin-right: .4em;
            }
            

            .agp-melhor {
                margin-top: 7em;
                display: flex;
                flex-direction: column;
                margin-left: 0em;
            }
            
            button:hover {
                display: none;
            }

            .faixa2 {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;

            }

            .titulo {
                padding: 0em;
                padding-top: 1em;
                padding-bottom: .2em;
                font-size: 1.7em;
            }


            .barra {
                width: 62%;
                padding: 0em;
                margin: 0em;
                margin-bottom: 2em;
            }

            .agp-jogo {
                display: flex;
                flex-direction: column;

                width: 100%;
                padding: 0em;
                margin: 0em;
            }

            .react-multi-carousel-list{
                width: 95%;
                margin-left: 3.5em;
            }

            .row2 {
                display: flex;
                flex-direction: column;
                margin: 0em;
                padding: 0em;
                justify-content: center;
                align-items: center;
            }

            .a1 {
                margin: 0em;
            }

            .a2 {
                margin: 0em;
            }

            .a3 {
                margin: 0em;
            }

            .a4 {
                margin: 0em;
            }

           
        }

   
    
`

const Bolota = styled.div`


position: absolute;
    top: -30em;
    right: 0em;
    z-index: 11;
    overflow: hidden;
    width: 60%;
    height: 100%;


@media (max-width: 425px) {
    display: none;
}

`

export { StyledConteudo, Bolota }