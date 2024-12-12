import React from 'react';
import styled from "styled-components";
import CarouselForMain from "./CarouselForMain.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

// todo data  перенести в конфиг


const GiftCardForCommerce = ({item, language}) => {
    const navigate = useNavigate()
    const onNavigateToShop = () => {
        navigate('/shop')
    }

    const {title, description, link, card} = item;


    return (<Wrapper>
        <div className='container'>
            <h2 className='title'>{title}</h2>
            <p className='description '>{description}
                <a className='link' href=""> {link}</a>
            </p>

            <Button className='btnGift' onClick={() => onNavigateToShop()}>
                {language('Browse All')}
            </Button>
            <CarouselForMain card={card}/>
        </div>
    </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;

  .container {
    max-width: 1400px;

  }

  .title {
    font-size: 32px;

  }

  .btnGift {
    display: none;
  }

  .description {
    font-size: 16px;
    padding-bottom: 20px;
  }

  .link {
    text-decoration: black underline;
    color: black;
  }

  @media (max-width: 1052px) {
    text-align: center;

    .btnGift {
      font-size: 21px;
      background-color: #fbcc0d;
      border: none;
      color: black;
      width: 250px;
      padding: 10px 24px 8px;
      height: auto;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      margin: 3px;
      border-radius: 35px;
      transition: scale 0.3s, background-color 0.3s;

      &:hover {
        scale: 110%;
        background-color: #fbcc0d;
        box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);
      }
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
`
export default GiftCardForCommerce;