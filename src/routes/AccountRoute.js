import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Jobsheet from "../components/Jobsheet";
import Login from "../components/Login"
import Dashboard from "../components/Dashboard";
import View from "../components/View";
import Print from "../components/Print";

const AccountRoute = () =>{
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Jobsheet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view/:id" element={<View />}/>
        <Route path="/print/:id" element={<Print />}/>
      </Routes>
    </Router>
   );
}

export default AccountRoute;
