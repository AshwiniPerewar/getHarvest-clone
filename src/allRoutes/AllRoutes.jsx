import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Customers } from "../pages/customers/Customers";
import { Integrations } from "../pages/integrations/Integrations";
import Home from "../pages/home/Home";
import { Whyharvest } from "../pages/wharvest/Whyharvest";
import { Features } from "../pages/features/Features";

import Pricing from "../pages/pricing/Pricing";
import WithoutNavFoot from "./WithoutNavFoot";
import WithNavFoot from "./WithNavFoot";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Welcome from "../pages/AfterSignup/welcomeToHarvest/Welcome";
import AfterSignUp2 from "../pages/AfterSignup/afterSignUp2/AfterSignUp2";
import AfterSignUp3 from "../pages/AfterSignup/afterSignUp3/AfterSignUp3";
import AfterSignUp4 from "../pages/AfterSignup/afterSignUp4/AfterSignUp4";
import AfterSignUp5 from "../pages/AfterSignup/afterSignUp5/AfterSignUp5";
import AfterSignUp6 from "../pages/AfterSignup/afterSignUp6/AfterSignUp6";
import AfterSignUp7 from "../pages/AfterSignup/afterSignUp7/AfterSignUp7";
import { Time } from "../proctedPages/time/Time";
import { Expenses } from "../proctedPages/expenses/Expenses";
import Team from "../proctedPages/team/Team";

let initialState = {
  team:"",
  hours:"",
}

export const AllRoutes = () => {
  const [data,setData] = useState(initialState)
  const [team,setTeam] = useState("0");
  const [hours,setHours] = useState(35)
  const handleTeam = (value) => {
    setTeam(value)
  }
  const handleHours = (value) => {
    setHours(value);
  }

  useEffect(() => {
    setData({
      team:team,
      hours:hours
    })
  },[team,hours])


  return (
    <div>
      <Routes>
        <Route element={<WithoutNavFoot />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome handleTeam={handleTeam}/>} />
          <Route path="/welcome/jtbd" element={<AfterSignUp2/>} />
          <Route path="/welcome/modules" element={<AfterSignUp3 />} />
          <Route path="/welcome/capacity" element={<AfterSignUp4 handleHours={handleHours}/>} />
          <Route path="/welcome/personal_reminders" element={<AfterSignUp5 />} />
          <Route path="/welcome/create_project" element={<AfterSignUp6 />} />
          <Route path="/welcome/marketing" element={<AfterSignUp7 data={data}/>} />
          <Route path="/time" element={<Time />} />
          <Route path="/expenses" element={<Expenses />} />
         <Route path="/team" element={<Team/>}/>
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
