import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';

const JobsheetTable = ({data}) => {
    return (
     
       <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                      
            <tr><th style={{textAlign:'center'}}>Job No.</th>
            <th style={{textAlign:'center'}}>Full Name</th>
            <th style={{textAlign:'center'}}>Email</th>
            <th style={{textAlign:'center'}}>Action</th>
            <th style={{textAlign:'center'}}>Status</th>
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
                  <Button variant="primary">View</Button>
                  </Link>
                  <Link to={`/print/${item._id}`}>
                  <Button variant="info">Print</Button>
                  </Link>
                 </td>
                 <td>{item.status}</td>
              </tr>
            )
          })}
        </tbody>

                       </table>
                </div>
  )
}

export default JobsheetTable
