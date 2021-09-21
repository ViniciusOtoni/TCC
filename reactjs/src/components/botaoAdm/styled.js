import styled from 'styled-components'

const  StyledButtonAdm = styled.button`
    font-family: medio;
    color: white;
    padding: .7em 1.5em;

    background-color: ${props => props.cor === 'vermelho' ? '#D9534F;' 
                                                    : props.cor === 'laranja' ? '#F0AC54;' 
                                                                             :  props.cor === 'preto' ? '#1A1A1A;'
                                                                                : '#5CB85C;'
                                                                              };
    border: none;
    
    &:hover{
        cursor: pointer;
        background-color: ${props => props.cor === 'vermelho' ? '#b5433f' 
                                                        : props.cor === 'laranja' ? '#cf9346;' 
                                                                                  :  props.cor === 'preto' ? '#000000' 
                                                                                    : '#50a150;'};
        transition: .5s;
    }
`                                                                             
export { StyledButtonAdm }