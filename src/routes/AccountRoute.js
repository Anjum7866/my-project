import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Jobsheet from "../components/Jobsheet";
import Login from "../components/Login"
import Dashboard from "../components/Dashboard";
import Updatesheet from "../components/Updatesheet";
import View from "../components/View";

const AccountRoute = () =>{
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Jobsheet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update/:id" element={<View />}/>
      </Routes>
    </Router>
   );
}

export default AccountRoute;
