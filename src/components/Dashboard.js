import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Sidebar from './Sidebar';
import axios from "axios";
import '../App.css';
import JobsheetTable from './JobsheetTable';

function Dashboard() {
  const [jobsheet, setJobsheet] =useState([]);

  const loadData = async ()=>{
    const response =await axios.get("http://localhost:4000/api/jobsheet/");
    if(response.status ===200){
      setJobsheet(response.data);   
    }
    
  };

  useEffect(()=>{
   loadData();
  },[])

  return ( 
    <div style={{ display: 'flex'}}>
       <Sidebar/>
       <div style={{margin:'20px'}}>
       <h1>Client Sheet List</h1>
     
       <JobsheetTable data={jobsheet}/>
       </div> 
    </div>
  )
}

export default Dashboard