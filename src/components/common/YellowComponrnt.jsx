import React from 'react';
import styled from "styled-components";
import {ICPayment,ICGame ,ICSoft,ICEnviro,ICCrypto,ICShop,ICFood  } from '/src/assets/SVG/Icons/index.js'
import {useNavigate} from "react-router-dom";
import {GlobalStore} from "../../store/index.js";
import {useLanguage} from "../CustomHook/LanguageContext.jsx";

const YellowComponent = () => {
    const navigate = useNavigate();
    const {__i} =useLanguage();

    const {
        setSelectedCategory,
    } = GlobalStore();

    const onNavigateToShop = (categoryId) => {
        navigate('/shop');
        setSelectedCategory(categoryId)

    }

    return (
        <Wrapper>
            <div className="container">

                <img src="https://cdn.coinsbee.com/dist/assets/img/categories/right-honeysheet.svg" alt="" style={{width:'auto',right:'0',bottom:"0",top:'0',position:"absolute",height:'100%',display:'flex'}}/>
                <img src="https://cdn.coinsbee.com/dist/assets/img/categories/left-honeysheet.svg" alt="" style={{width:'auto',left:'0',bottom:"0",top:'0',position:"absolute",height:'100%',display:'flex'}}/>
            <div className='middle'>
                <div className='title'>
                    <h2 style={{fontSize:'30px'}}>{__i("Explore more")}</h2>
                    <p style={{fontSize:'20px'}}>{__i("From grabbing your coffee")}</p>
                </div>
                <div className='card'>
                    <div className='line1'>
                        <div className='itemCard Item1'>
                            <a onClick={()=>onNavigateToShop(1)}>
                            <div>
                                <ICPayment/>
                                <p>{__i( "Payment Cards")}</p>
                            </div>
                        </a>
                        </div>
                        <div className='itemCard Item2'>
                            <a onClick={()=>onNavigateToShop(2)}>
                                <div>

                            <ICSoft/>
                            <p> {__i( "Software")}</p>
                              </div>
                            </a>
                        </div>
                        <div className='itemCard Item3'>
                            <a onClick={()=>onNavigateToShop(3)}>
                            <div>
                                <ICGame/>
                                <p> {__i( "Games")}</p>
                            </div></a>
                        </div>
                        <div className='itemCard Item4'>
                            <a onClick={()=>onNavigateToShop(4)}>
                            <div>
                                <ICFood/>
                                <p> {__i( "Food and Entertainment")}</p>
                            </div></a>
                        </div>
                    </div>
                    <div className='line2'>
                        <div className='itemCard Item5'>
                            <a onClick={()=>onNavigateToShop(5)}>
                            <div>
                                <ICShop/>
                                <p>   {__i( "Shopping")}</p>
                            </div>
                        </a>
                        </div>
                        <div className='itemCard Item6'>
                            <a onClick={()=>onNavigateToShop(6)}>
                            <div>
                                <ICCrypto/>
                                <p>{__i( "Cryptocurrency")}</p>
                            </div>

                        </a>
                        </div>
                        <div className='itemCard Item7'>
                            <a onClick={()=>onNavigateToShop(7)}>
                            <div>
                                <ICEnviro/>
                                <p>{__i( "Ecology")}</p>
                            </div></a>
                            </div>
                    </div>
                </div>
                <div className='tn'>
                    <button  className='btn' onClick={()=>onNavigateToShop()}>
                        {__i('Browse All')}
                </button>
                </div>
            </div>






        </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  width: 100%;
  background-color: #fbcc0d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;


  .container {
    max-width: 1440px;
    width: 75%;
    display: flex;

  }


  .middle {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 2;
    z-index: 1;
    text-align: center;
  }

  .itemCard {
    max-width: 150px;
    min-width: 150px;
    height: auto;
    background-color: #333e4d;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    text-align: center;
    flex-direction: column;
    &:hover {
      scale: 110%;
      background-color: #333e4d;
      box-shadow: 0 0 2px rgb(51, 62, 77), 0 0 20px rgb(51, 62, 77);


    }
    transition: scale 0.3s, background-color 0.3s;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    a{
      color: white;
    }
  }

  .line1 {
    display: flex;
    justify-content: space-between;
    order: 1;
    gap: 20px;
  }

  .line2 {
    display: flex;
    justify-content: center;
    order: 2;
    gap: 20px;
    padding-bottom: 20px;
  }

  .btn {
    color: white;
    background-color: #333e4d;
  margin: 48px 0 ;
    &:hover {
      scale: 110%;
      background-color: #333e4d;
      box-shadow: 0 0 2px rgb(51, 62, 77), 0 0 20px rgb(51, 62, 77);


    }
    font-size: 21px;
    border: none;
    width: 250px;
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
export default YellowComponent;