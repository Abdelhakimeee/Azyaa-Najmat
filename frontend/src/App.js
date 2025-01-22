import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Review from './pages/Review';
import Adming from './pages/Adming';
import AddProduct from './Components/AddProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';     
import UpdateProduct from './Components/UpdateProduct';
import FormShopNew from './Components/FormShopNew';




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
