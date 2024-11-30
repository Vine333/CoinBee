import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Global, Logo} from '/src/assets/SVG/Icons/index.js'
import{Select,Space,Spin} from "antd";
import {ShoppingCartOutlined, UserOutlined, SearchOutlined} from '@ant-design/icons'
import BurgerMenu from "./BurgerMenu.jsx";
import Button from "./Button.jsx";
import {GlobalStore, useCategorieStore, useCountryStore, useProductStore} from "../../store/index.js";
import Modal from "./Modal.jsx";
import {useShallow} from "zustand/react/shallow";


const Header = () => {

    const {isLoading, countries, loadCountry} = useCountryStore(useShallow(state => ({
        isLoading: state.isLoading, countries: state.countries, loadCountry: state.loadCountry,
    })));


    const {isLoad, categories, loadCategories} = useCategorieStore(useShallow(state => ({
        isLoad: state.isLoad, categories: state.categories, loadCategories: state.loadCategories

    })))
    const {isLoadingProducts, product, loadProducts, resetProducts} = useProductStore(useShallow(state => ({
        isLoadingProducts: state.isLoadingProducts,
        product: state.product,
        loadProducts: state.loadProducts,
        resetProducts: state.resetProducts
    })))
    const [modalActive,setModalActive]=useState(true)
    useEffect(()=>{
        loadCategories();
        loadCountry();
    },[])
    const {
        selectedCountry,
        setSelectedCountry,
        selectedCategory,
        setSelectedCategory,
        currentPage,
        setCurrentPage
    } = GlobalStore();
    const handleCountryChange = (value) => {
        setSelectedCountry(value);
        setCurrentPage(1);
        console.log(`Selected country: ${value}`);
    };
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setCurrentPage(1);
        console.log(`Selected category: ${value}`);
    };


    return (
        <>
        <Wrapper>
            <div className='Logo'>
                <Logo/>
            </div>
            <div className='Search'>
                <input placeholder='xyli nado dog?' className='Input'>

                </input>
                <button className='BtnInput'>
                    <SearchOutlined/>
                </button>
            </div>
            <div className="BtnInHeader">
                <Button className='Btn Global' onClick={()=>setModalActive(true)}>
                    <Global />
                </Button>

                <Button className='Btn User'>
                    <UserOutlined/>
                </Button>

                <Button className='Btn Shopping'>

                    <ShoppingCartOutlined/>
                </Button>

            </div>
        </Wrapper>
            <Modal  active={modalActive} setActive={setModalActive}>
                <Select showSearch style={{width: '100%',marginBottom:'10px'}}
                        placeholder="Выберите страну"
                        optionFilterProp="children"
                        onChange={handleCountryChange}
                        loading={isLoading}


                        notFoundContent={isLoading ? <Spin size="small"/> : 'Нет данных'}>
                    {countries.map(country => (
                        <Select.Option key={country.id} value={country.iso_name}>
                            <Space>
                                <img src={country.flag_url}
                                     alt={country.name} style={{width:'20px',marginRight:'8px'}}/>
                                {country.name}
                                ({country.currency_code})
                            </Space>
                        </Select.Option>
                    ))}
                </Select>
                <Select showSearch style={{width: '100%'}}
                        placeholder="Выберите категорию"
                        optionFilterProp="children"
                        onChange={handleCategoryChange}
                        loading={isLoad}
                        notFoundContent={isLoad ? <Spin size="small"/> : 'Нет данных'}>
                    {categories.map(categories => (
                        <Select.Option key={categories.id} value={categories.id}>
                            <Space>
                                <img src={categories.icon_url}
                                     alt={categories.name} style={{width:'20px',marginRight:'8px'}}/>
                                {categories.name}
                            </Space>
                        </Select.Option>

                    ))}
                </Select>
            </Modal>
            <NavMenu >

                   <div className='BurgerMenu'>
                       <BurgerMenu/>
                   </div>
                    <ul className='NavLinks'>
                        <li className='ListItemAllProducts'>
                            <a className='LinksCategory'>

                                Все продукты
                            </a>
                        </li>
                        <li className='ListItemMobil'>
                            <a className='LinksCategory'>
                                Пополнение баланса мобильного телефона
                            </a>
                        </li>
                        <li className='ListItemGame'>
                            <a className='LinksCategory'>
                                Игры
                            </a>
                        </li>
                        <li className='ListItemPlayGame'>
                            <a className='LinksCategory'>
                                Развлечения
                            </a>
                        </li>
                        <li className='ListItemCart'>
                            <a className='LinksCategory'>
                                Платежные Карты
                            </a>
                        </li>
                        <li className='ListItemCrypto'>
                            <a className='LinksCategory'>
                                Криптовалюта
                            </a>
                        </li>

                    </ul>

            </NavMenu>

</>
    );
};

const NavMenu = styled.div`
background-color: #fbcc0d;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  height: 50px;
  .NavLinks{
    text-decoration: none;
    list-style: none;
    flex:1 1 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    
  }
  .LinksCategory{
    font-size: 20px;
    display: block;
    padding: 8px;
    color: black;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
  width: auto;
    &::after{
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
    &:hover::after{
      
        width: 100%; 
      
    }
    &::after{
      transition: width 0.4s ease-in-out;
    }
  }
  @media(max-width:1139px ){
    .ListItemCrypto{
      display: none;
    }
  }
  @media(max-width:991px ){
    .ListItemCart{
      display: none;
    }
   
  }
  @media(max-width:809px ){
    .ListItemPlayGame{
      display: none;
    }

  }
  @media(max-width:676px ){
    .ListItemGame{
      display: none;
    }
    

  } 
  @media(max-width:618px ){
    .ListItemMobil{
      display: none;
    }
    

  }
`
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: #333e4d;
  padding: 24px 16px;
  flex-wrap: wrap;
  box-sizing: border-box;

  .Logo {
    width: 25%;
  }

  .Search {
    text-align: center;
    width: 50%;

  }

  .Global {

    background-color: aliceblue;
    &:hover {
      background-color: rgba(240, 248, 255, 0.74);
      box-shadow: none;
    }
  }

  .Btn {

    border: none;
    color: black;
    width: 37px;
    height: 37px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin: 3px;
    border-radius: 50%;
    transition: scale 0.3s, background-color 0.3s;
  }

  .Shopping {
    color: black;
    background-color: #fbcc0d;

    &:hover {
      scale: 110%;
      background-color: #fbcc0d;
      box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);


    }

  }

  

  .User {
    color: black;
    background-color: #fbcc0d;

    &:hover {
      scale: 110%;
      box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);
      background-color: #fbcc0d;
    }
  }

  .Search {

    display: flex;
    align-items: center;

    width: 50%;


  }

  .Input {

    height: 46px;
    border: none;
    outline: none;
    flex: 1;
    padding: 6px 15px;
    border-radius: 50px 0 0 50px;
    font-size: 16px;
    background-color: #ffffff;
    color: #000000;

    &::placeholder {
      color: #bdc3c7;
    }

  }

  .BtnInput {
    height: 46px;
    background-color: #fbcc0d;
    border: none;
    color: #000000;
    padding: 9.44px 16px 5px;
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    transition: scale 0.3s, background-color 0.3s;

    &:hover {
      scale: 110%;
      background-color: #fbcc0d;
      box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);

    }
  }

  @media (max-width: 991px) {
    .Logo {
      order: 1;
      flex: 1 1 50%;
    }

    padding: 8px;
    transition: all 0.5s;
    .Search {
      order: 3;
      flex: 1 1 100%;

    }

    .BtnInHeader {
      order: 2;
      flex: 1 1 50%;
      justify-content: end;
      display: flex;
    }

  }

`
export default Header;
