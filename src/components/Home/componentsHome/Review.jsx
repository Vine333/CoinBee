import React, {forwardRef} from 'react';
import styled from "styled-components";
import {ICStarsHalf, ICStars} from "../../../icons/index.js";
import CarouselReview from "./CarouselReview.jsx";
import {useLanguage} from "../../../hooks/useTranslate.jsx";

const cards = [{
    comment: 'I still use #btc to buy, sell and shop at #Coinsbee, it\'s quite convenient bro',
    name: 'Amelia',
    twitterIcon: 'https://cdn.coinsbee.com/dist/assets/img/x-logo.svg'
}, {
    comment: 'I still use #btc to buy, sell and shop at #Coinsbee, it\'s quite convenient bro',
    name: 'Adam',
    twitterIcon: 'https://cdn.coinsbee.com/dist/assets/img/x-logo.svg'
}, {
    comment: 'I still use #btc to buy, sell and shop at #Coinsbee, it\'s quite convenient bro',
    name: 'James',
    twitterIcon: 'https://cdn.coinsbee.com/dist/assets/img/x-logo.svg'
}, {
    comment: 'I still use #btc to buy, sell and shop at #Coinsbee, it\'s quite convenient bro',
    name: 'Janis',
    twitterIcon: 'https://cdn.coinsbee.com/dist/assets/img/x-logo.svg'
}, {
    comment: 'I still use #btc to buy, sell and shop at #Coinsbee, it\'s quite convenient bro',
    name: 'Serghei',
    twitterIcon: 'https://cdn.coinsbee.com/dist/assets/img/x-logo.svg'
}, {
    comment: 'I still use #btc to buy, sell and shop at #Coinsbee, it\'s quite convenient bro',
    name: 'Travis Scott',
    twitterIcon: 'https://cdn.coinsbee.com/dist/assets/img/x-logo.svg'
},

]


const Review = forwardRef((props, ref) => {
    const {__i} = useLanguage();
    return (<Wrapper>
        <div className='container' ref={ref}>
            <div className="title">
                <h2 style={{fontSize: '32px', fontWeight: 'normal'}}>{__i('What our customers say')}</h2>
                <div className='stars'>
                    <ICStars color="#51af95"/>
                    <ICStars color="#51af95"/>
                    <ICStars color="#51af95"/>
                    <ICStars color="#51af95"/>

                    <ICStarsHalf color='#51af95'/>

                </div>
                <a href="https://www.trustpilot.com/review/coinsbee.com" style={{cursor: 'pointer'}}>4.2/5 on
                    Trustpilot</a>
            </div>
            <CarouselReview cards={cards}/>
            <div className='btn'>
                <a href="https://www.trustpilot.com/review/coinsbee.com" style={{color: 'black'}}>

                    {__i('Check Our Reviews')}

                </a>

            </div>
        </div>
    </Wrapper>);
});
const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1540px;

  }

  .stars {
    padding: 10px;
    scale: 2;
    margin-bottom: 5px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      color: black;
      font-size: 19px;
      text-decoration: underline;

    }
  }

  .btn {

    margin: 48px 0;
    color: black;
    background-color: #fbcc0d;

    &:hover {
      scale: 110%;
      background-color: #fbcc0d;
      box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);


    }


    font-size: 21px;
    border: none;
    width: 300px;
    padding: 10px 24px 8px;
    height: auto;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 35px;
    transition: scale 0.3s, background-color 0.3s;

  }

`
export default Review;