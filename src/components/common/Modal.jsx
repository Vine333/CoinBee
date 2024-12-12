import React from 'react';
import styled from 'styled-components';

const Modal = ({active, setActive, children}) => {
    return (<ModalWrap active={active} onClick={() => setActive(false)}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </ModalWrap>);
};

const ModalWrap = styled.div`
  display: ${({active}) => (active ? 'flex' : 'none')};
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: 0.5s all;

  .modalContent {
    padding: 20px;
    border-radius: 13px;
    background-color: white;
    height: 500px;
    width: 380px;
  }
`;

export default Modal;
