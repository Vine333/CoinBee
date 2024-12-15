import React from 'react';
import AppLayout from "../../layouts/index.jsx";
import styled from "styled-components";
import Footer from "../common/Footer.jsx";
import {Form, Input} from "antd";
import Button from "../common/Button.jsx";
import {useLanguage} from "../../hooks/useTranslate.jsx";


const AuthPage = () => {
    const {__i} = useLanguage();


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (<AppLayout>

        <Wrapper>
            <div className='container'>

                <h1>{__i('LOGIN')}</h1>
                <p>{__i('Good to see you again! Log in here to access your Coinsbee account!')}</p>

                <div className='input'>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 700,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            className='formItem'

                            rules={[{
                                required: true, message: 'Please input your username!',
                            },]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item

                            rules={[{

                                required: true, message: 'Please input your password!',
                            },]}
                        >
                            <Input.Password/>
                        </Form.Item>


                    </Form>
                    <Button className='authBtn'>
                        {__i('Sign in')}
                    </Button>
                </div>
            </div>

        </Wrapper>
        <Footer/>
    </AppLayout>);
};
const Wrapper = styled.div`
  width: 100%;
  height: 50vh;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 700PX;
    margin-inline: 35%;
    height: 100%;
  }

  .formItem {
    width: 700px;
  }

  .authBtn {
    margin-right: 50px;
    width: 100%;
    padding: 10px 25px 8px;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 50px;
    max-width: 400px;
  }

  .input {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

  }

  @media (max-width: 770px) {
    :where(.css-dev-only-do-not-override-1x0dypw).ant-layout, :where(.css-dev-only-do-not-override-1x0dypw).ant-layout * {
      width: auto;
    }

    .container {
      padding-top: 30px;
      margin-bottom: 40px;
    }

    .authBtn {


    }

    .formItem {
      width: auto;
    }
  }
`
export default AuthPage;