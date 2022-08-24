import React from 'react'
import { Routes, Route } from 'react-router-dom';

//=========================================================
//           components import goes here
//========================================================= 
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';
import { Customers } from '../pages/customers/Customers';
import { Integrations } from '../pages/integrations/Integrations';
import { Whyharvest } from '../pages/wharvest/Whyharvest';

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/customers' element={<Customers/>} />
            <Route path='/integrations' element={<Integrations/>} />
            <Route path='/wharvest' element={<Whyharvest/>} />
        </Routes>
        <Footer/>     
    </div>
  )
};
 
