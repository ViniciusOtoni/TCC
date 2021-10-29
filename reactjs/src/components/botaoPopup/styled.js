import styled from "styled-components";

const StyledButtonPopup = styled.button`
  text-align: center;
  color: #f0ac54;
  border: 3px solid #f0ac54;
  background-color: rgba(0, 0, 0, 0);
  width: 15em;
  height: 2.5em;
  border-radius: 0.6em;
  font: 1.2em MontserratBold;

  &:hover {
    background-color: #f0ac54;
    color: white;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export { StyledButtonPopup };
