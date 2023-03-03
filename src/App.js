import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutUsPage from "./pages/aboutusPage/AboutUsPage";
import Catalog from "./pages/catalog/Catalog";
import Accessory from "./pages/accessory/Accessory";
import Contacts from "./pages/contacts/Contacts";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import './styles/global.css'
import Header from "./components/header/Header";
import ProductsPage from "./pages/productsPage/ProductsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProductsPage from "./pages/admin/addProductsPage/AddProductsPage";
import CatalogAdminPage from "./pages/admin/catalogAdminPage/CatalogAdminPage";
import ProductsAdminPage from "./pages/admin/productsAdminPage/ProductsAdminPage";
import CartPage from "./pages/cartPage/CartPage";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about-us" element={<AboutUsPage/>}/>
                <Route path='/accessory' element={<Accessory/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
                <Route path="/catalog/:product" element={<ProductsPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/admin/addProducts" element={<AddProductsPage/>}/>
                <Route path="/admin/catalog" element={<CatalogAdminPage/>}/>
                <Route path="/admin/catalog/:product" element={<ProductsAdminPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;