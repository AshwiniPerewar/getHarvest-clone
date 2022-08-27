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
import { Time } from "../proctedPages/time/Time";
import { Expenses } from "../proctedPages/expenses/Expenses";

export const AllRoutes = () => {
  return (
    <div>      
      <Routes>
        <Route element={<WithoutNavFoot />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/time" element={<Time />} />
          <Route path="/express" element={<Expenses />} />
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
    </div>
  );
};
