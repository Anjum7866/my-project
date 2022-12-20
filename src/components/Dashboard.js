import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import JobsheetTable from './JobsheetTable';
import Button from 'react-bootstrap/Button';

import adminLayout from "../hoc/adminLayout";


const Dashboard = () => {
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
    <>
    <div className="table-container">
        <div className="row">
            <div className="col">
            <Link to={"/emptysheet"}> <br/>
        <Button variant="primary">Print Empty Sheet</Button>
        <br/><br/>
        </Link>
                <h5 className="pb-2 mb-0">Client Sheet List</h5>
            </div>
            
        </div>
        <br/>
       
        <JobsheetTable data={jobsheet}/>
      
        <nav className="table-bottom-center-pagination" aria-label="Page navigation example ">
            <ul className="pagination">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                </a>
                </li>
            </ul>
        </nav>
    </div>
  
                
    </>
  )
}




export default adminLayout(Dashboard);