import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Customers } from "../pages/customers/Customers";
import { Integrations } from "../pages/integrations/Integrations";
import Home from "../components/home/Home";
import { Whyharvest } from "../pages/wharvest/Whyharvest";

import { Features } from "../pages/features/Features";

import Pricing from "../pages/pricing/Pricing";
import WithoutNavFoot from "./WithoutNavFoot";
import WithNavFoot from "./WithNavFoot";
import SignIn from "../pages/signIn/SignIn";

export const AllRoutes = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path='/customers' element={<Customers/>} />
            <Route path='/integrations' element={<Integrations/>} />
            <Route path='/whyharvest' element={<Whyharvest/>} />
            <Route path='/features' element={<Features/>} />
            <Route path="/pricing" element={<Pricing/>}/>

        </Routes> */}
      <Routes>
        <Route element={<WithoutNavFoot />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<WithNavFoot />}>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/whyharvest" element={<Whyharvest />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
      {/* <Footer/>      */}
    </div>
  );
};
