import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';
import { Customers } from '../pages/customers/Customers';
import { Integrations } from '../pages/integrations/Integrations';
import Home from "../components/home/Home"
import { Features } from '../pages/features/Features';

import Pricing from '../pages/pricing/Pricing';


export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path='/customers' element={<Customers/>} />
            <Route path='/integrations' element={<Integrations/>} />
            <Route path='/features' element={<Features/>} />
            <Route path="/prcing" element={<Pricing/>}/>
        </Routes>
        <Footer/>     
    </div>
  )
};
 
