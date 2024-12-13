import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ICPayment, ICGame, ICSoft, ICEnviro, ICCrypto, ICShop, ICFood } from '/src/assets/SVG/Icons/index.js';
import { useNavigate } from "react-router-dom";
import { GlobalStore } from "../../store/index.js";
import { useLanguage } from "../CustomHook/LanguageContext.jsx";

const BurgerMenu = () => {
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const { __i } = useLanguage();
    const { setSelectedCategory } = GlobalStore();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const onNavigateShop = (categoryId) => {
        navigate('/shop');
        setSelectedCategory(categoryId)
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Wrapper isOpen={isOpen}>
            <div className="burgerIcon" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="menu" ref={menuRef}>
                <li className='listItem'>
                    <a onClick={() => onNavigateShop(1)}>
                        <ICPayment/>
                        <div className='naming'>  {__i("Payment Cards")}</div>

                    </a>
                </li>
                <li className='listItem'>
                    <a onClick={() => onNavigateShop(2)}>
                        <ICSoft/>
                        <div className='naming'>  {__i("Software")}</div>

                    </a>
                </li>
                <li>
                    <a onClick={() => onNavigateShop(3)}>
                        <ICGame/>
                        <div className='naming'>{__i("Games")}</div>

                    </a>
                </li>
                <li className='listItem'>
                    <a onClick={() => onNavigateShop(4)}>
                        <ICFood/>
                        <div className='naming'>    {__i("Food and Entertainment")}</div>

                    </a>
                </li>
                <li className='listItem'>
                    <a onClick={() => onNavigateShop(5)}>
                        <ICShop/>
                        <div className='naming'>  {__i("Shopping")}</div>

                    </a>
                </li>
                <li className='listItem'>
                    <a onClick={() => onNavigateShop(6)}>
                        <ICCrypto/>
                        <div className='naming'>  {__i("Cryptocurrency")}</div>

                    </a>
                </li>
                <li className='listItem'>
                    <a onClick={() => onNavigateShop(7)}>
                        <ICEnviro/>
                        <div className='naming'>  {__i("Ecology")}</div>

                    </a>
                </li>
            </ul>
        </Wrapper>
    );
};



const Wrapper = styled.div`
  position: relative;
  background-color: #fbcc0d;
  padding: 10px;
  width: 100%;

  .burgerIcon {
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
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 7px)' : 'rotate(0)')};
      }

      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
        transform: ${({ isOpen }) => (isOpen ? 'translateX(-20px)' : 'translateX(0)')};
        transition: transform 0.3s, opacity 0.3s;
      }

      &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(4px, -7px)' : 'rotate(0)')};
      }
    }
  }

  .menu {
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
  z-index: 100;

  li {
    margin: 15px 15px;
  }

  .number {
    color: #fbcc0d;
  }

  .naming {
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

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.3s ease;
    }

    &:hover::after {
      background-color: #fbcc0d;
    }
  }`;
export default BurgerMenu;