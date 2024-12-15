import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {ICGlobal, ICLogo} from '/src/icons/index.js'
import {Select, Space, Spin} from "antd";
import {ShoppingCartOutlined, UserOutlined, SearchOutlined} from '@ant-design/icons'
import Button from "../common/Button.jsx";
import {useGlobalStore, useCountryStore,} from "../../store/index.js";
import {Modal,Menu}from "./index.js"
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";

import {useLanguage} from "../../hooks/useTranslate.jsx";


const Header = () => {

    const navigate = useNavigate()
    const {changeLanguage, __i} = useLanguage();

    const {
        selectedCountry, setSelectedCountry,
    } = useGlobalStore(useShallow(state => ({
        selectedCountry:state.selectedCountry,
        setSelectedCountry:state.setSelectedCountry,
    })));

    const {isLoading, countries, loadCountry} = useCountryStore(useShallow(state => ({
        isLoading: state.isLoading, countries: state.countries, loadCountry: state.loadCountry,
    })));

    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        loadCountry();
    }, [])


    const handleCountryChange = (value) => {
        setSelectedCountry(value);


        console.log(`Selected country: ${value}`);
    };

    const NavigateToAuth = () => {
        navigate('/login')
    }

    const onNavigateHome = () => {
        navigate('/', {
            replace: true,
        })
    }


    return (<>

        <Wrapper>
            <div className='logo' onClick={onNavigateHome}>
                <ICLogo/>
            </div>
            <div className='search'>
                <input placeholder={__i("What are you looking for?")} className='input'>

                </input>
                <button className='btnInput'>
                    <SearchOutlined/>
                </button>
            </div>
            <div className="btnInHeader">
                <Button className='btn Global' onClick={() => setModalActive(true)}>
                    <ICGlobal/>
                </Button>

                <Button className='btn User' onClick={NavigateToAuth}>
                    <UserOutlined/>
                </Button>

                <Button className='btn Shopping'>

                    <ShoppingCartOutlined/>
                </Button>

            </div>
        </Wrapper>
        <Modal active={modalActive} setActive={setModalActive} className='modal'>
            <h2>{__i("Country and Language")}</h2>
            <Select showSearch
                    style={{width: '100%', marginBottom: '10px',}}
                    placeholder={__i('Choices Country')}
                    optionFilterProp="children"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    loading={isLoading}
                    filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                    notFoundContent={isLoading ? <Spin size="small"/> : 'Нет данных'}>

                {countries.map(country => (

                    <Select.Option key={country.id} value={country.iso_name} label={country.name}>
                        <Space>
                            <img src={country.flag_url}
                                 alt={country.name} style={{width: '20px', marginRight: '8px'}}/>
                            {country.name}
                            ({country.currency_code})
                        </Space>
                    </Select.Option>))}
            </Select>
            <Select
                defaultValue={localStorage.getItem('language')}
                onChange={changeLanguage}
                placeholder={__i('Choices Language')}
                style={{width: '100%'}}
                options={[{value: 'ru', label: 'Русский'}, {value: 'en', label: 'English'},]}
            />
        </Modal>
        <Menu/>
    </>);
};


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


  .logo {
    width: 25%;
    cursor: pointer;
  }

  .search {
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
 

  .btn {

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

  .search {

    display: flex;
    align-items: center;

    width: 50%;


  }

  .input {

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

  .btnInput {
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
    .logo {
      order: 1;
      flex: 1 1 50%;
    }

    padding: 8px;
    transition: all 0.5s;
    .search {
      order: 3;
      flex: 1 1 100%;

    }

    .btnInHeader {
      order: 2;
      flex: 1 1 50%;
      justify-content: end;
      display: flex;
    }

  }

`
export default Header;
