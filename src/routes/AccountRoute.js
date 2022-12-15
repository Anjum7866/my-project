import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/app.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate
  } from 'react-router-dom';
import Jobsheet from "../components/Jobsheet";
import Login from "../components/Login"
import Dashboard from "../components/Dashboard";
import View from "../components/View";
import Print from "../components/Print";
import PrintJobsheet from "../components/PrintJobsheet";
import Machine from "../components/Machine";
import Printemptysheet from "../components/Printemptysheet";
import PrintJob from "../components/PrintJob";
import axios from "axios";




const AccountRoute = () =>{
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Jobsheet />} />
        <Route path="/printjobsheet" element={<PrintJobsheet />}/>
        <Route path="/emptysheet" element={<Printemptysheet />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/machine/:id" element={<Machine />}/>
        <Route path="/print/:id" element={<Print />}/>
        <Route path="/print" element={<Print />}/>
       
                
      </Routes>
    </Router>
   );
}

export default AccountRoute;
