import styled from "styled-components";

const StyledPopupBig = styled.div`
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

  .input input {
    width: 100%;
    height: 3em;
    color: #000000;
  }

  .butao {
    margin-top: 2em;
    text-align: center;
  }

  .mask{
    
  }

  
  .upload {
    display: flex;
    color: transparent !important;

 
  
    height: 32px;
    background: white;
    border-radius: 0.4em;
    position: relative;
  }

  .upload::-webkit-file-upload-button {
    visibility: hidden;
  }
  .upload::before {
    content: url("/assets/images/upload.svg");
   position: absolute;
   right: 2%;
   top: 20%;
    //background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: hidden;
    border-radius: 3px;

    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
 
    font-weight: 700;
    font-size: 10pt;
    z-index: 1;
    
  }
  .upload:hover::before {
    border: none;
  }
  .upload:active::before {
    //background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

export { StyledPopupBig };
