import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Sidebar from './Sidebar';
import axios from "axios";
import '../App.css';

function Dashboard() {
  const [data, setData] =useState([]);

  const loadData = async ()=>{
    const response =await axios.get("http://localhost:4000/api/jobsheet/");
    setData(response.data);
   
  };

  useEffect(()=>{
   loadData();
  },[])

  return ( 
    <div style={{ display: 'flex'}}>
       <Sidebar/>
       <div style={{margin:'20px'}}>
       <h1>Client Sheet List</h1>
     
       <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign:'center'}}>Job No.</th>
            <th style={{textAlign:'center'}}>Full Name</th>
            <th style={{textAlign:'center'}}>Email</th>
            <th style={{textAlign:'center'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index)=> {
            return (
              <tr key={item.id}>
                <th scode="row">{item._id}</th>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/update/${item._id}`}>
                  <button className='btn btn-view'>View</button>
                  </Link>
                  <button className='btn btn-contact'>Request a machine</button>
                  <button className='btn btn-delete'>Print</button>
                </td>
              </tr>
            )
          })}
        </tbody>
       </table>
       </div> 
    </div>
  )
}

export default Dashboard