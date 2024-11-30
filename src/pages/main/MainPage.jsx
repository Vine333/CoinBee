import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {StarIC, StarHalfIC} from '/src/assets/SVG/Icons/index.js'
import {useShallow} from "zustand/react/shallow";
import {useProductStore, useCountryStore, useCategorieStore, GlobalStore} from '/src/store/index.js'
import AppLayout from "../../layouts/index.jsx";
import Card from '/src/components/common/Card.jsx'
import Carousel from "../../components/common/Carousel.jsx";
import Crypto from "../../components/common/Crypto.jsx";


const MainPage = () => {
    const {
        selectedCountry,

        selectedCategory,

        currentPage,
        setCurrentPage
    } = GlobalStore();


    const {isLoad, categories, loadCategories} = useCategorieStore(useShallow(state => ({
        isLoad: state.isLoad, categories: state.categories, loadCategories: state.loadCategories

    })))
    const {product, loadProducts, resetProducts} = useProductStore(useShallow(state => ({

        product: state.product,
        loadProducts: state.loadProducts,
        resetProducts: state.resetProducts
    })))


    const [pageSize] = useState(4);


    useEffect(() => {
        if (selectedCountry && selectedCategory) {
            resetProducts();
            loadProducts(selectedCountry, selectedCategory)
            console.log(product)
        }
    }, [selectedCountry, selectedCategory])


    const handlePageChange = (page) => {
        setCurrentPage(page);
        loadProducts(selectedCountry, selectedCategory);
        console.log("handlePageChange", product)
    };

    const endIndex = currentPage * pageSize;
    const startIndex = endIndex - pageSize;
    // const paginatedProducts = product.slice(startIndex, endIndex);
const cards =[
    { title:'FORTNITE',  price:'USD 1.00 - 500.00', image:'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Fortnite.png'},
    { title:'FREEFIRE',  price:'USD 1.00 - 500.00', image:'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Free-Fire.png'},
    { title:'PUBG',  price:'USD 1.00 - 500.00', image:'https://cdn.coinsbee.com/version2/dist/assets/img/brands/PUBG.png'},
    { title:'Bigo Live',  price:'USD 1.00 - 500.00', image:'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Bigo-Live.png'},
    { title:'Mobile Legends',  price:'USD 1.00 - 500.00', image:'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Mobile-Legends.png'},
    { title:'Stripchat',  price:'USD 1.00 - 500.00', image:'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Stripchat.png'},

]

    return (
        <AppLayout>
            <Wrapper>
                <div className='Container'>
                    <div className='FlexContainer'>


                        <div className='Description_mainContent'>
                            <h1>Покупайте подарочные карты за биткоины или другие криптовалюты</h1>
                            <p>На Coinsbee.com вы можете купить платежные карты, мобильные пополнения или подарочные
                                карты с
                                помощью биткоина или других криптовалют. Более 4000 брендов, доступных в более чем 185
                                странах. Простая, быстрая и безопасная оплата с помощью более 200 различных криптовалют,
                                Mastercard, Visa и других способов оплаты.</p>

                            <a role='button' className='BtnAMineContent'>Посмотреть все</a>

                        </div>
                        <div className='Carousel'>
                            <Carousel cards={cards} />
                        </div>
                    </div>
                    <div className='LogoBTC'>

                        <a href="" className='LinkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/beincrypto.svg' alt=""/>
                        </a>
                        <a href="" className='LinkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitcoin-com.svg' alt=""/>
                        </a>
                        <a href="" className='LinkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitcoin-magazine.svg' width='170px'
                                 height='25px' alt=""/>
                        </a>
                        <a href="" className='LinkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/bitecho.svg' alt=""/>
                        </a>
                        <a href="" className='LinkBTC'>
                            <img src='https://cdn.coinsbee.com/dist/assets/img/hero/newsbtc.svg' alt=""/>
                        </a>


                    </div>

                    <div className='Rate'>
                        <div className='NumberWithStar'>
                            <span className='number'>4.5/5</span>
                            <ul>
                                <li className='LiStar'>
                                    <StarIC/>
                                </li>
                                <li className='LiStar'>
                                    <StarIC/>
                                </li>
                                <li className='LiStar'>
                                    <StarIC/>
                                </li>
                                <li className='LiStar'>
                                    <StarIC/>
                                </li>
                                <li className='LiStar'>
                                    <StarHalfIC/>
                                </li>
                            </ul>
                        </div>
                        <span>
                            <div>
                        <a role='button' className='Trust'> Доверяют 500 000+ пользователей</a>
                        <br className='br'/>
                        <span style={{margin: "0 8px", color: 'gray'}}>из 185+ стран</span>
                        </div>
                    </span>

                    </div>
                </div>


                        <Crypto className='PayGiftCard'/>


            </Wrapper>
        </AppLayout>
    );
};

const Wrapper = styled.div`
  width: 100%;
  .PayGiftCard{
   
  }
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

  .LiStar {
    list-style: none;
  }

  @media (min-width: 768px) {
    .br {
      display: none !important;
    }
  }

  .BtnAMineContent {
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

  .Trust {
    text-decoration: black underline;
    color: gray;
    width: 100%;
  }

  .NumberWithStar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  .FlexContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;

  }

  .LinkBTC {
    margin: 8px 25px;

    img {
      color: gray;
      filter: grayscale(100%);
      opacity: .35;
    }
  }

  .Description_mainContent {
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

  .LogoBTC {
    order: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .Rate {
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

  .Carousel {
    flex: 1 1 60%;
    order: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Container {
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
