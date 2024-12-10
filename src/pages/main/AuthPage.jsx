import React from 'react';
import AppLayout from "../../layouts/index.jsx";
import styled from "styled-components";
import Footer from "../../components/common/Footer.jsx";
import {Form,Input} from "antd";
import Button from "../../components/common/Button.jsx";
import {useLanguage} from "../../components/CustomHook/LanguageContext.jsx";



const AuthPage = () => {
    const {__i} =useLanguage();









    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };









    return (
        <AppLayout>

            <Wrapper>
                <div className='container'>

                    <h1>{__i('LOGIN')}</h1>
                    <p>{__i( 'Good to see you again! Log in here to access your Coinsbee account!')}</p>

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

                            style={{width:"700px"}}
                           rules={[
                               {
                                   required: true,
                                   message: 'Please input your username!',
                               },
                           ]}
                       >
                           <Input />
                       </Form.Item>

                       <Form.Item

                           rules={[
                               {

                                   required: true,
                                   message: 'Please input your password!',
                               },
                           ]}
                       >
                           <Input.Password />
                       </Form.Item>



                       <Form.Item label={null} style={{paddingRight:'50%'}}>
                           <Button style={{marginRight:'50px',width:'100%',padding:'10px 25px 8px',borderRadius:'20px',border:'none',fontSize:'20px',fontWeight:'300'}}>
                               {__i('Sign in')}
                           </Button>
                       </Form.Item>
                   </Form>

               </div>
                </div>

        </Wrapper>
            <Footer/>
        </AppLayout>
    );
};
const Wrapper = styled.div`
width: 100%;
  height: 50vh;
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 700PX;
    margin-inline: 35%;
    height: 100%;
  }
  .input{
    display: flex;
    align-items: flex-start;
    
  }
`
export default AuthPage;