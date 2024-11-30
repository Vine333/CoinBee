import React, {useState} from 'react';
import styled from 'styled-components';
import {Phone,Game} from '/src/assets/SVG/Icons/index.js'


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (<Wrapper>
            <BurgerIcon onClick={toggleMenu} isOpen={isOpen}>
                <div></div>
                <div></div>
                <div></div>
            </BurgerIcon>
            <Menu isOpen={isOpen}>
                <li className='ListItem'>
                    <a>
                    <img src="https://cdn.coinsbee.com/dist/assets/img/categories/mobile-recharge.svg" alt="" style={{width:'20px',height:'30px'}}/>
                    <div className='Naming'>Пополнение баланса мобильного телефона</div>
                    <div className='Number'>4</div>
                </a>
                </li>
                <li className='ListItem'>
                    <a>
                        <img src="https://cdn.coinsbee.com/dist/assets/img/categories/games.svg" alt={'IC'} style={{width:'20px',height:'14px'}}/>
                        <div className='Naming'>Игры</div>
                        <div className='Number'>29</div>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="https://cdn.coinsbee.com/dist/assets/img/categories/entertainment.svg" alt="" style={{width:'20px',height:'23px'}}/>
                        <div className='Naming'>Развлечения</div>
                        <div className='Number'>12</div>
                        </a>
                </li>
                <li className='ListItem'>
                    <a>
                        <img src="https://cdn.coinsbee.com/dist/assets/img/categories/payment-cards.svg" alt="" style={{width:'20px',height:'20px'}}/>
                        <div className='Naming'> Платежные Карты</div>
                        <div className='Number'> 4</div>

                    </a>
                </li>
                <li className='ListItem'>
                    <a>
                        <img src="https://cdn.coinsbee.com/dist/assets/img/categories/crypto.svg" alt="" style={{width:'20px',height:'20px'}}/>
                        <div className='Naming'> Криптовалюта</div>
                        <div className='Number'>3</div>

                    </a>
                </li>
            </Menu>
        </Wrapper>);
};

export default BurgerMenu;

const Wrapper = styled.div`
  width: 100%;
  background-color: #fbcc0d;
  position: relative;
  padding: 10px;
`;

const BurgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  

  div {
    width: 100%;
    height: 4px;
    background-color: #333;
    transition: all 0.3s;


    &:nth-child(1) { 
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 7px)' : 'rotate(0)')}
     } 
    &:nth-child(2) { 
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)}; 
      transform: ${({ isOpen }) => (isOpen ? 'translateX(-20px)' : 'translateX(0)')}; 
      transition: transform 0.3s, opacity 0.3s; 
    } 
    &:nth-child(3) { transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(4px, -7px)' : 'rotate(0)')};
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: auto;
  li {
    margin: 15px 15px;
    
  }
  .Number{
    color: #fbcc0d;
  }
  .Naming{
    display: flex;
    align-items: flex-start;
    flex: 1 1 50%;
    padding-left: 10px;
    color: #767a81;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  &::after{
    content: ''; /* обязательный контент для псевдоэлемента */
    position: absolute;
    bottom: 0; /* фиксируем внизу */
    left: 0;
    width: 100%; /* занимает всю ширину блока */
    height: 2px; /* высота линии */
    background-color: transparent; /* по умолчанию прозрачная */
    transition: background-color 0.3s ease; /* плавная анимация */
  }
    &:hover::after{
      background-color: #fbcc0d
    }
  }
 
  
  
`;
