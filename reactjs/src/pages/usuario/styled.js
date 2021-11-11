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

  .user-picture {
    position: relative;
  }

  .camera {
    position: absolute;
    left: 5.5em;
    bottom: -0.5em;
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
    border-radius: 50%;
  }

  .camera img {
    width: 20px;
    height: 20px;
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

    
    padding: 0.8em 0.6em;
  }

  label {
    width: 200px;
    color: white;
    font-family: MontserratBold;
    margin-bottom: .3em;
  }

  .change-information button {
    width: 500px;
    color: #F0AC54;
    background-color: #333333;
    padding: 1em 0em;
    border-radius: 20px;
    border: 4px solid #F0AC54;
    font-family: MontSerratBold;
    margin: 2em 0em 4em 10em;

    cursor: pointer;
  }

  


`

export {Container};