import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../components/Home/MainPage.jsx";
import ShopPage from "../components/Shop/ShopPage.jsx";
import AuthPage from "../components/Auth/AuthPage.jsx";


const AppRoutes = () => {

    return (<BrowserRouter basename={'/'}>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/login' element={<AuthPage/>}/>
        </Routes>
    </BrowserRouter>);
};
export default AppRoutes;

