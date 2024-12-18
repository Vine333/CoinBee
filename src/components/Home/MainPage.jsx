import React, {useRef} from 'react';
import styled from "styled-components";
import {ICStars, ICStarsHalf} from '/src/icons';
import AppLayout from "../../layouts/index.jsx";
import {Data,
    Accordion,
    Cards} from '/src/config/Array.js'
import {
    Carousel, Payments, GiftCardForCommerce, YellowComponent, SectionVideo, SectionSteps, Review, FAQ, Footer
} from "/src/components/Home/componentsHome/index.js";

import {useNavigate} from "react-router-dom";
import {useLanguage} from "../../hooks/useTranslate.jsx";


const MainPage = () => {
    const navigate = useNavigate();
    const {__i} = useLanguage();
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const onNavigateShop = () => {
        navigate('/shop');
    };






    return (<AppLayout>
        <Wrapper>
            <div className='containerForAll'>
                <div className='containerMain'>
                    <div className='flexContainer'>
                        <div className='descriptionMainContent'>
                            <h1>{__i("Buy Gift Cards with Crypto")}</h1>
                            <p>{__i('At Coinsbee.com you can buy payment cards, mobile top-ups or gift cards with Bitcoin or other cryptocurrencies. More than 4000 brands available in over 185 countries. Easy, fast and secure payment with over 200 different cryptocurrencies, Mastercard, Visa and other payment methods')}</p>
                            <a role='button' className='btnAMineContent'
                               onClick={onNavigateShop}>{__i('Browse All')}</a>
                        </div>
                        <div className='carousel'>
                            <Carousel cards={Cards}/>
                        </div>
                    </div>
                    <div className='logoBTC'>
                        <a href="src/components/Home/MainPage.jsx" className='linkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/beincrypto.svg' alt=""/>
                        </a>
                        <a href="src/components/Home/MainPage.jsx" className='linkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitcoin-com.svg' alt=""/>
                        </a>
                        <a href="src/components/Home/MainPage.jsx" className='linkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitcoin-magazine.svg' width='170px'
                                 height='25px' alt=""/>
                        </a>
                        <a href="src/components/Home/MainPage.jsx" className='linkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitecho.svg' alt=""/>
                        </a>
                        <a href="src/components/Home/MainPage.jsx" className='linkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/newsbtc.svg' alt=""/>
                        </a>
                    </div>
                    <div className='rate'>
                        <div className='numberWithStar'>
                            <span className='number'>4.2/5</span>
                            <ul>
                                <li className='liStar'>
                                    <ICStars/>
                                </li>
                                <li className='liStar'>
                                    <ICStars/>
                                </li>
                                <li className='liStar'>
                                    <ICStars/>
                                </li>
                                <li className='liStar'>
                                    <ICStars/>
                                </li>
                                <li className='liStar'>
                                    <ICStarsHalf/>
                                </li>
                            </ul>
                        </div>
                        <span>
                            <div>
                                <a role='button' className='trust'
                                   onClick={scrollToSection}> {__i('Trusted by 500,000+ users')}</a>
                                <br className='br'/>
                                <span
                                    style={{margin: "0 8px", color: 'gray'}}>{__i('from 185+ countries')}</span>
                            </div>
                        </span>
                    </div>
                </div>
                <Payments className='payGiftCard'/>

               <GiftCardForCommerce  item={Data} />
                <YellowComponent/>
                <SectionVideo/>
                <SectionSteps/>
                <Review ref={sectionRef}/>
                <h2 style={{fontSize: '30px'}}>FAQ</h2>
                <FAQ items={Accordion} />
                <Footer/>
            </div>

        </Wrapper>
    </AppLayout>);
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 100px;
  }

  .item1 {
    background: #213413;
  }

  .item2 {
    background: #215443;
  }

  .item3 {
    background: #211123;
  }

  .liStar {
    list-style: none;
  }


  .btnAMineContent {
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

  .trust {
    text-decoration: black underline;
    color: gray;
    width: 100%;
  }

  .numberWithStar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  .flexContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
  }

  .linkBTC {
    margin: 8px 25px;

    img {
      color: gray;
      filter: grayscale(100%);
      opacity: .35;
    }
  }

  .descriptionMainContent {
    flex: 0 0 40%;
    order: 1;
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 31px;
    }

    p {
      font-size: 20px;
    }
  }

  .logoBTC {
    order: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .rate {
    order: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1540px;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 0 0 0;
      margin: 0;
    }
  }

  .carousel {
    flex: 1 1 60%;
    order: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .containerMain {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    max-width: 1540px;
  }

  .number {
    color: gray;
  }

  .containerForAll {
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    .br {
      display: none !important;
    }
  }
  @media (max-width: 1400px) {
    .flexContainer {
      flex-direction: column;
    }

    .carousel {

    }

    .descriptionMainContent {
      order: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  @media (max-width: 1124px) {
    .carousel {
      display: none;

    }

    .logoBTC {
      display: none;
    }
  }
`;

export default MainPage;
