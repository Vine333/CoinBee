import React from 'react';
import styled from "styled-components";
import {useLanguage} from "../CustomHook/LanguageContext.jsx";
import Button from "./Button.jsx";

const Payments = () => {
    const {__i} = useLanguage();
    return (<Wrapper>

        <div className="title">
            <h2>{__i('Pay for gift cards the way you want')}
            </h2>
            <p>{__i('Choose from 200+ Cryptos, Binance Pay, Crypto.com Pay, Remitano, Visa/Mastercard and')} <a
                style={{cursor: 'pointer', color: 'black', textDecoration: "underline"}}
                href="#">{__i('more')}</a></p>
        </div>

        <div className='paymentWraper'>
            <div className='paymentCrypto'>
                <div className='pymentMetodItem'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/btc.svg" alt="BTC"
                                 width='73px' height='68px'/>
                        </a>
                    </div>
                </div>

                <div className='pymentMetodItem'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/eth.svg" alt="ETH"
                                 width='73px' height='68px'/>
                        </a>
                    </div>
                </div>


                <div className='pymentMetodItem'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/usdt.svg" alt="USDT"
                                 width='73px' height='68px'/>
                        </a>
                    </div>
                </div>

                <div className='pymentMetodItem'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/ltc.svg" alt="LTC"
                                 width='73px' height='68px'/>
                        </a>
                    </div>
                </div>

                <div className='pymentMetodItem'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/ton.svg" alt="TON"
                                 width='73px' height='68px'/>
                        </a>
                    </div>
                </div>

                <div className='pymentMetodItem'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/doge.svg" alt="Doge"
                                 width='73px' height='68px'/>
                        </a>
                    </div>
                </div>

                <div className='pymentMetodItem XRP'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/xrp.svg" alt="XRP"
                                 width='73px' height='68px'/>
                        </a>
                    </div>
                </div>

                <div className='pymentMetodItem another'>
                    <div className='payMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/dist/assets/img/payment-icons/payment-icon-8.svg"
                                 alt="another" width='73px' height='68px'/>
                        </a>
                    </div>
                </div>
            </div>
            <Button className='anyCrypto'>
                {__i('Browse All')}
            </Button>
            <div className='paymetnsMetodName'>
                <div><img src="https://cdn.coinsbee.com/dist/assets/img/payment-methods/gatepay.svg" alt="GatePay"
                          width='118px' height='30px'/></div>
                <div><img src="https://cdn.coinsbee.com/dist/assets/img/payment-methods/cryptocompay.svg"
                          alt="Crypto.Com" width='175px' height="30px"/></div>
                <div><img src="https://cdn.coinsbee.com/dist/assets/img/payment-methods/binancepay.svg"
                          alt="BinancePay" width='150px' height='30px'/></div>
                <div className='remitano'><img
                    src="https://cdn.coinsbee.com/dist/assets/img/payment-methods/remianto.svg" alt="Remianto"
                    width='130px' height='30px'/></div>
                <div className='visa'><img src="https://cdn.coinsbee.com/dist/assets/img/payment-methods/visa.svg"
                                           alt="Visa" width="90px" height='30px'/></div>
                <div className='master'><img
                    src="https://cdn.coinsbee.com/dist/assets/img/payment-methods/mastercard.svg" alt="MasterCard"
                    width='61px' height='36px'/></div>


            </div>

        </div>


    </Wrapper>);
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  flex-direction: column;
  max-width: 1540px;

  .paymetnsMetodName {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 10px;
    width: 100%;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .title {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .paymentWraper {
    border-bottom: 1px solid #e0e0e0;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .paymentCrypto {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px 10px;
  }

  .pymentMetodItem {
    border: 1px solid black;
    border-radius: 10px;
    scale: 1;
    padding: 15px;
    justify-content: center;
    align-items: center;
    display: flex;

  }

  .payMetnImgWrapper {
    width: 100%;
    height: 100%;

    img {
      max-height: 73px;
      max-width: 75px !important;
      flex: 0 0 auto;
    }
  }

  .anyCrypto {
    display: none;
  }

  @media (max-width: 926px) {
    .paymentCrypto {


    }

    .remitano {
      display: none;
    }

    .visa {
      display: none;
    }

    .master {
      display: none;
    }

    .anyCrypto {
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
      margin-bottom: 20px;
      border-radius: 35px;
      transition: scale 0.3s, background-color 0.3s;

      &:hover {
        scale: 110%;
        background-color: #fbcc0d;
        box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);
      }
    }

    .pymentMetodItem {
      width: 100%;
      justify-content: center;
      align-items: center;
      display: none;
    }

    .payMetnImgWrapper {
      display: none;
    }

    .another {
      display: none;
    }

    .XRP {
      display: none;
    }

    @media (max-width: 500px) {
      .paymetnsMetodName {
        display: none;
      }
    }
  }
`

export default Payments;