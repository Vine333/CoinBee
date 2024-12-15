import React from 'react';
import styled from "styled-components";
import {ICLogo} from '/src/icons/index.js'
import {useLanguage} from "../../hooks/useTranslate.jsx";


const Footer = () => {

    const {__i} = useLanguage();

    return (<Wrapper>
        <div className='container'>
            <div className='footerInfo'>
                <div className="footerInfoCategory">
                    <p>{__i('Categories')}</p>
                    <div className='categoryList'>
                        <ul className='list'>
                            <li><a href="">{__i("Payment Cards")}</a></li>
                            <li><a href=""> {__i("Software")}</a></li>
                            <li><a href="">  {__i("Games")}</a></li>
                            <li><a href=""> {__i("Food and Entertainment")}</a></li>
                            <li><a href="">{__i("Shopping")}</a></li>
                            <li><a href="">{__i("Cryptocurrency")}</a></li>
                            <li><a href="">{__i("Ecology")}</a></li>

                        </ul>
                    </div>
                </div>
                <div className='footerInfoTools'>
                    <p>{__i("Tools")}</p>
                    <div className='toolsList'>
                        <ul className='list'>
                            <li><a>{__i('Support & Help')}</a></li>
                            <li><a>{__i('Supported Crypto')}</a></li>
                            <li><a>{__i("How it Works")}</a></li>
                            <li><a>{__i('Newsletter')}</a></li>
                            <li><a>{__i('Event Calendar')}</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footerInfoAboutUs'>

                    <p>{__i("About Us")}</p>
                    <div className='aboutUsList'>
                        <ul className='list'>
                            <li><a>{__i('Our history')}</a></li>
                            <li><a>{__i("Known from")}</a></li>
                            <li><a>{__i('Press Resources')}</a></li>
                            <li><a>{__i('Trustpilot Reviews')}</a></li>
                            <li><a>{__i('Blog')}</a></li>
                        </ul>

                    </div>
                </div>
                <div className='footerInfoLegal'>
                    <p>{__i('Legal')}</p>
                    <div className='legalInfoList'>
                        <ul className='list'>
                            <li><a>{__i('Terms and Conditions')}</a></li>
                            <li><a>{__i('Privacy Policy')}</a></li>
                            <li><a>Imprint</a></li>
                            <li><a>KYC & AML</a></li>

                        </ul>
                    </div>
                </div>
                <div className='footerLogo'>
                    <ICLogo/>
                    <p>Honey for your crypto money</p>
                </div>
            </div>
            <div className='footerCommunity'>

                <div className='textFooter'><p>{__i('Join our community')}</p></div>
                <div className='community'>
                    <a href="">
                        <img src="https://cdn.coinsbee.com/dist/assets/img/twitter-icon.svg" alt="twitter" width='25px'
                             height='25px'/>
                    </a>
                    <a href="">
                        <img src="https://cdn.coinsbee.com/dist/assets/img/youtube-icon.svg" alt="youtube"/>
                    </a>
                    <a href="">
                        <img src="https://cdn.coinsbee.com/dist/assets/img/reddit-icon.svg" alt="reddit"/>
                    </a>
                    <a href="">
                        <img src="https://cdn.coinsbee.com/dist/assets/img/fb-icon.svg" alt="faceBook"/>
                    </a>
                    <a href="">
                        <img src="https://cdn.coinsbee.com/dist/assets/img/telegram-icon.svg" alt="telegram"/>
                    </a>
                    <a href="">
                        <img src="https://cdn.coinsbee.com/dist/assets/img/instagramicon.svg" alt="insta"/>
                    </a>
                    <a href="">
                        <img src="https://cdn.coinsbee.com/dist/assets/img/tiktok.svg" alt="Tittok"/>
                    </a>

                </div>
                <div className='descriptionFooter'>
                    <p>{__i("The product names")}</p>
                </div>

            </div>

        </div>


    </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;
  background-color: #333e4d;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    padding: 30px;
max-width: 1540px;
    align-items: center;
    justify-content: center;
  }

  .footerLanguage {
    background-color: #eecc0d;
    width: 100%;
    height: 40px;
  }

  .footerInfo {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    width: 90%;
  }

  .textFooter {
    width: 40%;
    color: #eecc0d;
    font-size: 20px;
  }

  .descriptionFooter {
    color: white;
    font-size: 16px;
  }

  .footerInfoCategory {
    color: white;
    position: relative;
    width: 16.6%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    flex-direction: column;

    li {

    }

    p {
      color: #eecc0d;
      font-size: 22px;
      margin: 0;

    }

  }

  .footerCommunity {
    display: flex;
    padding-left: 50px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
  }

  .community {
    display: flex;
    padding-inline: 30px;

    img {
      margin: 8px;
    }
  }

  .list {
    a {
      color: white;
      position: relative;
      display: inline-block;
      text-decoration: none;
      overflow: hidden;
      transition: color 0.3s ease;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: -100%;
        background-color: #eecc0d;
        transition: left 0.3s ease;
      }

      &:hover {
        color: #eecc0d;
      }

      &:hover:before {
        left: 0;
      }
    }
  }

  .footerInfoTools {
    color: white;
    width: 16.6%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    flex-direction: column;

    p {
      color: #eecc0d;
      font-size: 20px;
      margin: 0;
    }

  }

  .footerInfoAboutUs {
    color: white;
    width: 16.6%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    flex-direction: column;

    p {
      color: #eecc0d;
      font-size: 20px;
      margin: 0;
    }


  }

  .footerInfoLegal {
    color: white;
    width: 16.6%;
    display: flex;

    justify-content: flex-start;
    font-size: 16px;
    flex-direction: column;

    p {
      margin: 0;
      color: #eecc0d;
      font-size: 20px;
    }

  }

  .footerLogo {
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    justify-content: center;

    scale: 1.5;

  }

  @media (max-width: 1400px) {
    .footerLogo {
      display: none;
    }
  }
  @media (max-width: 750px) {
    .footerInfo {
      flex-direction: column;
    }

    .footerCommunity {
      flex-direction: column;
      padding: 0;
    }
  }
`
export default Footer;