import React, {useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {Select, Space, Spin, List, Card, Pagination} from 'antd';
import {useGlobalStore, useProductStore, useCountryStore, useCategoryStore} from "../../store/index.js";
import {useShallow} from 'zustand/react/shallow';
import {useNavigate, useLocation} from 'react-router-dom';
import {useLanguage} from "../../hooks/useTranslate.jsx";
import AppLayout from "../../layouts/index.jsx";
import Footer from '/src/components/common/Footer.jsx'

const ShopPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {__i} = useLanguage();

    const {
        selectedCountry, setSelectedCountry, selectedCategory, setSelectedCategory, currentPage, setCurrentPage,
    } = useGlobalStore(useShallow(state => ({
        selectedCategory: state.selectedCategory,
        setSelectedCategory: state.setSelectedCategory,
        selectedCountry: state.selectedCountry,
        setSelectedCountry: state.setSelectedCountry,
        currentPage: state.currentPage,
        setCurrentPage: state.setCurrentPage,
    })));

    const {
        isLoadingProducts, product, loadProducts, resetProducts, totalProducts, pageSize
    } = useProductStore(useShallow(state => ({
        isLoadingProducts: state.isLoadingProducts,
        product: state.product,
        loadProducts: state.loadProducts,
        totalProducts: state.totalProducts,
        resetProducts: state.resetProducts,
        pageSize: state.pageSize,

    })));

    const {isLoading, countries,} = useCountryStore(useShallow(state => ({
        isLoading: state.isLoading, countries: state.countries,
    })));

    const {isLoad, categories, loadCategories} = useCategoryStore(useShallow(state => ({
        isLoad: state.isLoad, categories: state.categories, loadCategories: state.loadCategories,
    })));

    const updateUrl = (country, category, page) => {
        const params = new URLSearchParams();
        if (country) {
            params.set('country', country);
        }
        if (category) {
            params.set('category', category);
        }
        params.set('page', page);
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const showCategories = (categories) => {
        const filteredCategories = categories.filter(category => category.products_count > 0);


        for (let i = 0; i < filteredCategories.length; i++) {

        }

        return filteredCategories;
    }

    useEffect(() => {
        if (selectedCountry) {
            setSelectedCountry(selectedCountry);
        }
    }, [selectedCountry, setSelectedCountry]);

    useEffect(() => {
        loadCategories();

    }, [loadCategories]);

    useEffect(() => {
        if (selectedCategory) {
            setSelectedCategory(selectedCategory);
        }
    }, [selectedCategory, setSelectedCategory]);

    useEffect(() => {
        if (selectedCountry) {
            resetProducts();
            if (selectedCategory) {
                loadProducts(selectedCountry, selectedCategory, currentPage, pageSize);
            } else {
                loadProducts(selectedCountry, null, currentPage, pageSize);
            }
        }
    }, [selectedCountry, selectedCategory, currentPage, resetProducts, loadProducts, pageSize]);

    const handleCountryChange = useCallback((value) => {
        setSelectedCountry(value);
        updateUrl(value, selectedCountry);
    }, [selectedCountry]);

    const handleCategoryChange = useCallback((category) => {
        setSelectedCategory(category.id);
        updateUrl(selectedCategory, category.id);
    }, [selectedCategory]);

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);
        if (selectedCountry) {
            loadProducts(selectedCountry, selectedCategory, page);
        }
    }, [selectedCountry, selectedCategory, setCurrentPage, loadProducts]);

    return (<AppLayout>
        <Wrapper>
            <h1>{__i("Online Shopping with Crypto")}</h1>
            <div className="container">
                <div className="allProductsContainer">
                    <div className="region">{__i('Region')}</div>
                    <div className="selectCountry">
                        <Select
                            showSearch
                            style={{width: '100%', marginBottom: '10px'}}
                            placeholder={__i('Select country')}
                            optionFilterProp="children"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            loading={isLoading}
                            notFoundContent={isLoading ? <Spin size="small"/> : __i('No data available')}
                            filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                        >
                            {countries.map(country => (
                                <Select.Option key={country.id} value={country.iso_name} label={country.name}>
                                    <Space>
                                        <img
                                            src={country.flag_url}
                                            alt={country.name}
                                            style={{width: '20px', marginRight: '8px'}}
                                        />
                                        {country.name} ({country.currency_code})
                                    </Space>
                                </Select.Option>))}
                        </Select>
                    </div>

                    <div className='selectCategory'>
                        <h3>{__i('Categories')}</h3>
                        {isLoad ? (<Spin size="large"/>) : (


                            <List

                                dataSource={showCategories(categories)}
                                renderItem={category => (<List.Item
                                    key={category.id}
                                    style={{
                                        cursor: 'pointer',
                                        marginBottom: '8px',
                                        borderBottom: selectedCategory === category.id ? '2px solid #fbcc0d' : 'none',
                                    }}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <Space>
                                        <img
                                            src={category.icon_url}
                                            alt={category.name}
                                            style={{width: '20px', marginRight: '8px'}}
                                        />
                                        <span>{category.name}</span>
                                        <span>{category.products_count}</span>
                                    </Space>
                                </List.Item>)}
                            />)}
                    </div>
                </div>

                <div className="resultProducts">
                    <div className='cardsProduct'>
                        {isLoadingProducts ? (<Spin size="large"/>) : (product.map(product => (<Card
                            key={`${product.id}-${product.name}`}
                            title={product.name}
                            style={{width: '300px', marginBottom: '16px'}}
                            cover={<img src={product.logo_url} alt={product.name} style={{width: '100%'}}/>}
                        >
                            <div>
                                <p>{product.country.name}</p>
                                <p style={{fontSize: '20px'}}>
                                    {product.price_list_usd[0]}$ {product.currency}
                                </p>
                            </div>
                        </Card>)))}
                    </div>
                    <Pagination
                        rootClassName='myPagination'
                        current={currentPage}
                        pageSize={pageSize}
                        total={totalProducts}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </Wrapper>
        <Footer/>
    </AppLayout>);
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .cardsProduct {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
  }

  .allProductsContainer {
    width: 400px;
    min-width: 250px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }

  .region {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .selectCountry,
  .selectCategory {
    margin-bottom: 20px;
  }

  .selectCategory {
    h3 {
      margin-bottom: 10px;
    }
  }

  .resultProducts {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 1100px;
    gap: 15px;
    flex-direction: column;
  }

  .myPagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .myPagination .ant-select-show-search:where(.css-dev-only-do-not-override-1x0dypw).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    display: none;
  }

  .myPagination .ant-pagination-item {
    border-radius: 50%;
    background-color: #f0f0f0;
  }

  .myPagination .ant-pagination-prev,
  .myPagination .ant-pagination-next {
    background-color: #fbcc0d;
    color: white;
  }

  .antPagination .ant-pagination-item-active a {
    color: black;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .allProductsContainer,
    .resultProducts {
      width: 100%;
    }
  }
  @media (max-width: 425px ) {
    .myPagination {
      width: 100%;
      gap: 5px;
    }
  }
`;

export default ShopPage;
