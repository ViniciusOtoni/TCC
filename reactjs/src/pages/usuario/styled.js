import styled from "styled-components";


const Container = styled.div`

    display: flex;
    flex-direction: row;

    justify-content: center;
    
  .my-account {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin: 8em 0em;
  }

  .agp-botao {
    display: flex;
    flex-direction: row;
  }

  .user-picture {
    position: relative;
  }

  .camera {
    position: absolute;
    left: 5.5em;
    bottom: -1.3em;
  }

  .camera button {
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    border: 4px solid #282828;
    background-color: #282828;
    cursor: pointer;
  }

  .img-user img {
    margin: 0px;
    height: 133px;
    width: 133px;
    border-radius: 50%;
  }

  .inputSenha {
    position: relative;
  }

  .inputSenha img {
    position: absolute;
    right: 2%;
    top: 20%;

    cursor: pointer;

    width: 20px;
    height: 20px;
  }

  .camera img {
    
    cursor: pointer;
  }

  .personal-information {
    display: flex;
    flex-direction: column;
    width: 420px;

    margin: 0em 0em;
  }

  .sub-group-input {
    display: flex;
    flex-direction: column;
 
    width: 375px;
    margin-bottom: 0.5em;
   
  }

  .sub-group-input input {
    background: white;
    border-radius: 2px;
    border: none;

    width: 375px;
    color: #282828;
    font-family: MontserratBold;
    font-size: 12px;
    letter-spacing: .1em;
    outline: none;

    cursor: text;

    
    padding: 0.8em 0.6em;
  }

  label {
    width: 200px;
    color: white;
    font-family: MontserratBold;
    margin-bottom: .3em;
  }

  .change-information button {
    width: 300px;
    color: #F0AC54;
    background-color: #333333;
    padding: 1em 0em;
    border-radius: 20px;
    border: 4px solid #F0AC54;
    font-family: MontSerratBold;
    margin-top: 2em;
    margin-left: 4em;

    cursor: pointer;
  }

  .upload {
        display: flex;
        color: transparent !important;


       background-size: 125px;
       width: 2em;
       height: 2.2em;
     




      background: #282828;
      border-radius: 10px;
    }


    .upload::-webkit-file-upload-button {
        visibility: hidden;
      }
      .upload::before {
        content: url('/assets/images/cameraUSU.svg');
        display: inline-block;
        
        border: hidden;
        border-radius: 3px;


        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
        z-index: 1;
      }
      .upload:hover::before {
       border: none;
      }
      

  


`

export {Container};