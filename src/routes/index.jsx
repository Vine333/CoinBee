import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/main/MainPage.jsx";
import ShopPage from "../pages/main/ShopPage.jsx";
import AuthPage from "../pages/main/AuthPage.jsx";



const AppRoutes = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path='/shop' element={<ShopPage/>}/>
                <Route path='/login' element={<AuthPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

