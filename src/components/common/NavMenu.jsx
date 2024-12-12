import React from 'react';
import BurgerMenu from "./BurgerMenu.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {GlobalStore} from "../../store/index.js";
import {useLanguage} from "../CustomHook/LanguageContext.jsx";

const NavMenu = () => {

    const navigate = useNavigate();
    const {__i} = useLanguage();

    const {
        setSelectedCategory,
    } = GlobalStore();


    const onNavigateToShop = (categoryId) => {
        navigate('/shop');
        setSelectedCategory(categoryId)

    }

    const onNavigate = () => {
        navigate('/shop')
    }

    return (<Menu>

        <div className='burgerMenu'>
            <BurgerMenu/>
        </div>
        <ul className='navLinks'>
            <li className='listItemAllProducts'>
                <a className='linksCategory' onClick={onNavigate}>

                    {__i("All Products")}
                </a>
            </li>
            <li className='listItemMobil'>
                <a className='linksCategory' onClick={() => onNavigateToShop(1)}>

                    {__i("Payment Cards")}
                </a>
            </li>
            <li className='listItemGame'>
                <a className='linksCategory' onClick={() => onNavigateToShop(2)}>

                    {__i("Software")}
                </a>
            </li>
            <li className='listItemPlayGame'>
                <a className='linksCategory' onClick={() => onNavigateToShop(3)}>

                    {__i("Games")}
                </a>
            </li>
            <li className='listItemCart'>
                <a className='linksCategory' onClick={() => onNavigateToShop(4)}>

                    {__i("Food and Entertainment")}
                </a>
            </li>
            <li className='listItemCrypto'>
                <a className='linksCategory' onClick={() => onNavigateToShop(5)}>
                    {__i("Shopping")}
                </a>
            </li>
            <li className='listItemCrypto'>
                <a className='linksCategory' onClick={() => onNavigateToShop(6)}>

                    {__i("Cryptocurrency")}
                </a>
            </li>
            <li className='listItemCrypto'>
                <a className='linksCategory' onClick={() => onNavigateToShop(7)}>

                    {__i("Ecology")}
                </a>
            </li>

        </ul>

    </Menu>);
};
const Menu = styled.div`
  background-color: #fbcc0d;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  height: 50px;


  .navLinks {
    text-decoration: none;
    list-style: none;
    flex: 1 1 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;

  }

  .linksCategory {
    font-size: 20px;
    display: block;
    padding: 8px;
    color: black;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    width: auto;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 0;
      background-color: black;
      transition: all 0.3s ease;
      transform-origin: left;
    }

    &:hover::after {

      width: 100%;

    }

    &::after {
      transition: width 0.4s ease-in-out;
    }
  }

  @media (max-width: 1139px ) {
    .listItemCrypto {
      display: none;
    }
  }
  @media (max-width: 991px ) {
    .listItemCart {
      display: none;
    }

  }
  @media (max-width: 809px ) {
    .listItemPlayGame {
      display: none;
    }

  }
  @media (max-width: 676px ) {
    .listItemGame {
      display: none;
    }


  }
  @media (max-width: 618px ) {
    .listItemMobil {
      display: none;
    }


  }
`
export default NavMenu;