import React, {useRef} from 'react';
import styled from "styled-components";
import {StarIC, StarHalfIC} from '/src/assets/SVG/Icons/index.js';
import AppLayout from "../../layouts/index.jsx";
import {Data} from "../../config/data.js";
import items from '/src/config/Accardion.js';
import {
    Carousel, Payments, GiftCardForCommerce, YellowComponent, SectionVideo, SectionSteps, Review, FAQ, Footer
} from "/src/components/common/index.js";
import Cards from '/src/config/Cards.js';
import {useNavigate} from "react-router-dom";
import {useLanguage} from "../../components/CustomHook/LanguageContext.jsx";


const MainPage = () => {
    const navigate = useNavigate();
    const { __i} = useLanguage();
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const onNavigateShop = () => {
        navigate('/shop');
    };
    const localizedData = Data(__i);
    //  todo классы с маленькой camelCase

    return (<AppLayout>
        <Wrapper>
            <div className='container'>
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
                    <a href="" className='linkBTC'>
                        <img src='https://cdn.coinsbee.com/dist/assets/img/hero/beincrypto.svg' alt=""/>
                    </a>
                    <a href="" className='linkBTC'>
                        <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitcoin-com.svg' alt=""/>
                    </a>
                    <a href="" className='linkBTC'>
                        <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitcoin-magazine.svg' width='170px'
                             height='25px' alt=""/>
                    </a>
                    <a href="" className='linkBTC'>
                        <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitecho.svg' alt=""/>
                    </a>
                    <a href="" className='linkBTC'>
                        <img src='https://cdn.coinsbee.com/dist/assets/img/hero/newsbtc.svg' alt=""/>
                    </a>
                </div>
                <div className='rate'>
                    <div className='numberWithStar'>
                        <span className='number'>4.2/5</span>
                        <ul>
                            <li className='liStar'>
                                <StarIC/>
                            </li>
                            <li className='liStar'>
                                <StarIC/>
                            </li>
                            <li className='liStar'>
                                <StarIC/>
                            </li>
                            <li className='liStar'>
                                <StarIC/>
                            </li>
                            <li className='liStar'>
                                <StarHalfIC/>
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
            {localizedData.map((item, index) => (<GiftCardForCommerce key={index} item={item}/>))}
            <YellowComponent/>
            <SectionVideo/>
            <SectionSteps/>
            <Review ref={sectionRef}/>
            <h2 style={{fontSize: '30px'}}>FAQ</h2>
            <FAQ items={items} language={__i}/>
            <Footer/>
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

  @media (min-width: 768px) {
    .br {
      display: none !important;
    }
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

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
  }

  .number {
    color: gray;
  }
`;

export default MainPage;
