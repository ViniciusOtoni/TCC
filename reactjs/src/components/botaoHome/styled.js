import styled from "styled-components";

const StyledButtonHome = styled.div`
  text-align: center;
  color: #f0ac54;
  border: 4px solid #f0ac54;
  background-color: rgba(0, 0, 0, 0);
  width: 7.8em;
  height: 2em;
  border-radius: 1.7em;
  font: 1.2em MontserratBold;

  &:hover {
    background-color: #f0ac54;
    color: white;
    transition: 0.5s;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    width: 7.8em;
    height: 2.1em;
  }
`;

export { StyledButtonHome };
