import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/main/MainPage.jsx";



const AppRoutes = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

