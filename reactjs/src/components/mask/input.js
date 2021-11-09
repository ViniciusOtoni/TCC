import React from 'react';
import InputMask from 'react-input-mask';
import { Mask } from './styled.js'

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange, name, mask, placeholder }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <Mask>
        <InputMask className="input" placeholder={placeholder}
            name={name}
            mask={mask}
            value={value}
            onChange={handleChange}
        />
    </Mask>

  );
};

export default MaskedInput;