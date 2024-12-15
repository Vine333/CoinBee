import React from 'react';
import styled from "styled-components";
import CarouselForMain from "./CarouselForMain.jsx";
import Button from "../../common/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useLanguage} from "../../../hooks/useTranslate.jsx";


const GiftCardForCommerce = ({item}) => {


    const navigate = useNavigate()


    const {__i} = useLanguage();


    const onNavigateToShop = () => {
        navigate('/shop')
    }

    return (<Wrapper>
        {item.map((section, index) => {
            const {title, description, link, card} = section;
            return (
                <div className='container' key={index}>
                    <h2 className='title'>{__i(title)}</h2>
                    <p className='description'>
                        {__i(description)}
                        <a className='link' href="src/components/Home/componentsHome/GiftCardForCommerce.jsx#">{link}</a>
                    </p>

                    <Button className='btnGift' onClick={onNavigateToShop}>
                        {__i('Browse All')}
                    </Button>
                    <CarouselForMain card={card}/>
                </div>
            );
        })}
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