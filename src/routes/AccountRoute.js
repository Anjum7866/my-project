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
import Home from "../components/Home";
import PrintJobsheet from "../components/PrintJobsheet";

const AccountRoute = () =>{
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Jobsheet />} />
        <Route path="/printjobsheet" element={<PrintJobsheet />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view/:id" element={<View />}/>
        <Route path="/print" element={<Print />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
   );
}

export default AccountRoute;
