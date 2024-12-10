import React from 'react';
import styled from "styled-components";
import CarouselForMain from "./CarouselForMain.jsx";

// todo data  перенести в конфиг



const GiftCardForCommerce = ({item}) => {

    const {title, description, link, card} = item;


    return (
        <Wrapper>
        <h2 className='title'>{title}</h2>
        <p className='description '>{description}
            <a className='link' href=""> {link}</a>
        </p>


        <CarouselForMain card={card}/>
    </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  border-bottom: 1px solid lightgrey;

  .title {
    font-size: 32px;

  }

  .description {
    font-size: 16px;
    padding-bottom: 20px;
  }

  .link {
    text-decoration: black underline;
    color: black;
  }

`
export default GiftCardForCommerce;