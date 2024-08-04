import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home';
import Shop from './Components/Body/Shop';
import ContactUs from './Components/Body/ContactUs';
import Review from './Components/Body/Review'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/review' element={<Review />} />
      </Routes>
      
      <Footer />

    </BrowserRouter>
    </div>
  );
}

export default App;
