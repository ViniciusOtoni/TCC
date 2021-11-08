import styled from "styled-components"

const Mask = styled.div`

.input{
  background-color: #ffffff;
  color: #808080;
  padding: .9em;
  border-radius: .4em;
  border: none;
  outline: none;
  font-family: MontserratBold;
  cursor: pointer;
  width: 25em;
}

  .input::placeholder {
    color: #808080;
    font-size: 1em;
    font-family: MontserratBold;
  }

  .input:focus::-webkit-input-placeholder {
    color: transparent;
  }

`

export { Mask }