import React from 'react';
import styled from "styled-components";

const Crypto = () => {
    return (
        <Wrapper>
        <div className="title">
            <h2>Оплатите подарочные карты так, как вам удобно…
            </h2>
            <p>Выбирайте из более чем 200 криптовалют, Binance Pay, Crypto.com Pay, Remitano, Visa/Mastercard и <a
                href="#">больше.</a></p>
        </div>

                <div className='PymentWraper'>
                    <div className='pymentMetodItem'>
                        <div className='PayMetnImgWrapper'>
                            <a href="">
                                <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/btc.svg" alt="BTC" width='73px' height='68px'/>
                            </a>
                        </div>
                    </div>

                    <div className='pymentMetodItem'>
                        <div className='PayMetnImgWrapper'>
                            <a href="">
                                <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/eth.svg" alt="ETH" width='73px' height='68px'/>
                            </a>
                        </div>
                    </div>


                    <div className='pymentMetodItem'>
                    <div className='PayMetnImgWrapper'>
                        <a href="">
                            <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/usdt.svg" alt="USDT" width='73px' height='68px'/>
                        </a>
                    </div>
                        </div>

                        <div className='pymentMetodItem'>
                            <div className='PayMetnImgWrapper'>
                                <a href="">
                                    <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/ltc.svg" alt="LTC" width='73px' height='68px'/>
                                </a>
                            </div>
                        </div>

                        <div className='pymentMetodItem'>
                            <div className='PayMetnImgWrapper'>
                                <a href="">
                                    <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/ton.svg" alt="TON" width='73px' height='68px'/>
                                </a>
                            </div>
                        </div>

                        <div className='pymentMetodItem'>
                            <div className='PayMetnImgWrapper'>
                                <a href="">
                                    <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/doge.svg" alt="Doge" width='73px' height='68px'/>
                                </a>
                            </div>
                        </div>

                        <div className='pymentMetodItem'>
                            <div className='PayMetnImgWrapper'>
                                <a href="">
                                    <img src="https://cdn.coinsbee.com/version2/dist/assets/img/coins/xrp.svg" alt="XRP" width='73px' height='68px'/>
                                </a>
                            </div>
                        </div>

                        <div className='pymentMetodItem'>
                            <div className='PayMetnImgWrapper'>
                                <a href="">
                                    <img src="https://cdn.coinsbee.com/dist/assets/img/payment-icons/payment-icon-8.svg" alt="another" width='73px' height='68px'/>
                                </a>
                            </div>
                        </div>



                </div>


        </Wrapper>
    );
};

const Wrapper = styled.div`
display: flex;
  justify-content: center;
  border-top: 1px solid #e0e0e0 ;
  width: 100%;
  flex-direction: column;
  .title{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction:column;
  }
  .PymentWraper{
    border-bottom: 1px solid #e0e0e0;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
  .pymentMetodItem{
    border: 1px solid black;
    border-radius: 10px;
    scale: 1.2;
    padding: 15px;
    justify-content: center;
    align-items: center;
    display: flex;
    
  }
  .PayMetnImgWrapper{
    width: 100%;
    height: 100%;
    img{
      max-height: 73px;
      max-width: 75px !important;
      flex:  0 0  auto;
    }
  }
`

export default Crypto;