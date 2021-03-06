import React from 'react';
import './App.sass';
import Header from "./Header/Header";
import Category from "./Category/Category";
import {Route, Routes} from "react-router-dom";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Category/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
