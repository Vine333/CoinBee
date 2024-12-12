import React, {useState} from 'react';
import {Steps} from 'antd';
import styled from 'styled-components';
import {useLanguage} from '../CustomHook/LanguageContext';


const steps = (__i) => [{
    title: __i('Choose your product'), content: (<>
        <h1>{__i('Choose your product')}</h1>
        <p>{__i('Select the product or service you want. We support 4000 brands in 185 countries worldwide.')}</p>
        <br/>
        <p>{__i('Please make sure that the desired product or service is supported in your country.')}</p>
    </>),
}, {
    title: __i('Pay with your crypto'), content: (<>
        <h1>{__i('Pay with your crypto')}</h1>
        <p>{__i("After that, select the gift card amount you want")}</p>
        <br/>
        <p>{__i('For Payment you can select one of more than 200 different cryptocurrencies.')}</p>
    </>),
}, {
    title: __i('Get your gift card'), content: (<>
        <h1>{__i('Get your gift card')}</h1>
        <p>{__i("The voucher code ")}</p>
        <br/>
        <p>{__i('Please check also')}</p>
    </>),
},];

const SectionsSteps = () => {
    const {__i} = useLanguage();
    const [current, setCurrent] = useState(0);

    const items = steps(__i).map((item) => ({
        key: item.title, title: item.title,
    }));

    return (<Wrapper>
        <div className='containerSteps'>
            <div className='stepStyle'>
                <Steps
                    className='steps'
                    current={current}
                    items={items}

                    onChange={(value) => setCurrent(value)}
                />
            </div>
            <div className='content'>{steps(__i)[current].content}</div>

        </div>
    </Wrapper>);
};

const Wrapper = styled.div`
  background-color: #333e4d;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 20px;
  width: 100%;

  .containerSteps {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1540px;
  }

  .stepStyle {
    width: 50%;
    max-width: 1440px;
    padding-bottom: 20px;
    color: white;
    scale: 2;

    .ant-steps-item-icon {
      background-color: transparent;
      color: white;
      border: 1px solid white;
      transition: none;
    }

    .ant-steps-item-process .ant-steps-item-icon {
      background-color: transparent;
      border: 1px solid white;
    }

    .ant-steps-item:hover .ant-steps-item-icon {
      background-color: #ffffff;
      border: 1px solid white;
    }

    .ant-steps-item-finish .ant-steps-item-icon {
      background-color: transparent;
      border: 1px solid white;

      &:hover {
        border: 1px solid white;
      }
    }

    .ant-steps-item-wait .ant-steps-item-icon .ant-steps-icon {
      color: white;
    }

    .ant-steps-item-title {

    }

    .ant-steps .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
      color: #ffffff;
    }

    .ant-steps-item-finish .ant-steps-item-title,
    .ant-steps-item-process .ant-steps-item-title {
      color: #ffffff;
    }

    .ant-steps-horizontal .ant-steps-item::before {
      background-color: #ffffff;
    }

    .ant-steps .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
      background-color: #fafafa;
    }

    .ant-steps-item:hover .ant-steps-item-icon {
      background-color: transparent;
      border: 1px solid white;

    }
  }

  .steps {
    color: white;
  }

  .container {
    max-width: 1540px;
  }

  .content {
    text-align: center;
    color: #000000;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    font-size: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    height: 500px;
    width: 700px;
    margin-bottom: 40px;

    p {

      font-size: 25px;
    }
  }

  .ant-steps-item-container {

  }

  @media (max-width: 1596px ) {
    .steps {
      display: flex;

      justify-content: center;
      align-items: center;
      padding: 0;
      content: none;
    }

    :where(.css-dev-only-do-not-override-1x0dypw).ant-steps.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
      padding-inline: 0;
      left: 0;
    }

    .ant-steps-item-title {
      display: none;
    }
  }

  .ant-steps-item-container {
    width: 50%;
  }

  .stepStyle {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 740px) {
    :where(.css-dev-only-do-not-override-1x0dypw).ant-steps.ant-steps-vertical {

      flex-direction: row;
    }

    :where(.css-dev-only-do-not-override-1x0dypw).ant-steps.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
      width: 0;
      height: 100%;
    }

    .content {
      width: 70%;
      font-size: 10px;

      h1 {
        font-size: 30px;
      }

      p {
        margin: 0;
        padding: 0;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 400px) {
    .content {
      font-size: 10px;
      height: auto;

      h1 {
        font-size: 20px;
      }
    }
  }
`;

export default SectionsSteps;
