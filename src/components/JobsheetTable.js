import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

const JobsheetTable = ({data}) => {
   
    return (
    <div>
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
                  <Link to={`/view/${item._id}`}>
                  <button className='btn btn-view'>View</button>
                  </Link>
                  <button className='btn btn-contact'>Request a machine</button>
                  <Link to={`/print/${item._id}`}>
                  <button className='btn btn-delete'>Print</button>
                  </Link>
                 </td>
              </tr>
            )
          })}
        </tbody>
       </table>
    </div>
  )
}

export default JobsheetTable
