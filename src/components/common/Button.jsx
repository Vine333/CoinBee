import React from 'react';
import styled from 'styled-components';

const Button = ({children,...props}) => {
    return (
        <>
            <Btn {...props}>
                {children}
            </Btn>
        </>
    );
};

const Btn= styled.button`
  color: black;
  background-color: #fbcc0d;

  &:hover {
    scale: 110%;
    background-color: #fbcc0d;
    box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);


  }


`
export default Button;