import React from 'react';
import './App.sass';
import Category from "./components/Category/Category";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

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
