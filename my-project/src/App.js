import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home';
import Shop from './Components/Body/Shop';
import Review from './Components/Body/Review';
import Adming from './Components/Body/Adming';
import AddProduct from './Components/Body/AddProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PrivateRoute from './Components/Body/PrivateRoute';
import Login from './Components/Body/Login';     
import UpdateProduct from './Components/Body/UpdateProduct';
import FormShopNew from './Components/Body/FormShopNew';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/review' element={<Review />} />
        <Route path='/login' element={<Login />} />
        <Route path='/formShop/:id' element={<FormShopNew />} />


        {/* Adming with code or user */}
        <Route path='/adming' element={<PrivateRoute element={<Adming />} />} />
        <Route path='/add' element={<PrivateRoute element={<AddProduct />} />} />
        <Route path='/appdate/:id' element={<PrivateRoute element={<UpdateProduct />} />} />
        

      </Routes>
      
      <Footer />

      <div className='icon-WhantsApp'>
        <a href="https://api.whatsapp.com/send?phone=212772326384" target="_black" rel='nooper noreferrer'>
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>
      </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
