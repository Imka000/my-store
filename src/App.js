import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutUsPage from "./pages/aboutusPage/AboutUsPage";
import Catalog from "./pages/catalog/Catalog";
import Accessory from "./pages/accessory/Accessory";
import Contacts from "./pages/contacts/Contacts";
import Iphone from "./pages/iphone/Iphone";
import Ipad from "./pages/iPad/Ipad";
import AppleWatch from "./pages/appleWatch/AppleWatch";
import CatalogList from "./pages/catalogList/CatalogList";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about-us" element={<AboutUsPage/>}/>
                <Route path="/catalog" element={<Catalog/>}>
                    <Route index element={<CatalogList/>}/>
                    <Route path="iphone" element={<Iphone/>}/>
                    <Route path="iPad" element={<Ipad/>}/>
                    <Route path="apple-watch" element={<AppleWatch/>}/>
                </Route>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;