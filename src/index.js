import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import InternalServerError from './pages/InternalServerError';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/mvp" element={<Home />} />
        <Route path="/mvp/product" element={<Products />} />
        <Route path="/mvp/product/:id" element={<Product />} />
        <Route path="/mvp/about" element={<AboutPage />} />
        <Route path="/mvp/contact" element={<ContactPage />} />
        <Route path="/mvp/cart" element={<Cart />} />
        <Route path="/mvp/login" element={<Login />} />
        <Route path="/mvp/register" element={<Register />} />
        <Route path="/mvp/checkout" element={<Checkout />} />
        <Route path="/err500" element={<InternalServerError />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/mvp/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);