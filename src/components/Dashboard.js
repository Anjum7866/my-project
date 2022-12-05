import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Sidebar from './Sidebar';
import axios from "axios";
import JobsheetTable from './JobsheetTable';
import Button from 'react-bootstrap/Button';

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
       

        <Link to={"/emptysheet"}> 
        <Button variant="primary">Print Empty Sheet</Button>
        </Link>
        
       <h3>Client Sheet List</h3>
     
       <JobsheetTable data={jobsheet}/>
       </div> 
    </div>
  )
}

export default Dashboard