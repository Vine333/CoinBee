import React from 'react';
import {Layout} from "antd";
import styled from "styled-components";
import Header from '/src/components/common/Header.jsx'

const {Content} = Layout;


const AppLayout = ({children}) => {


    return (
        <Wrapper
            className="site-layout">

            <Header/>

            <Content>
                {children}
            </Content>

        </Wrapper>
    );
};

const Wrapper = styled(Layout)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`
export default AppLayout;
