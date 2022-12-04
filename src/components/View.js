import React, {useState, useEffect} from 'react'
import { useParams, Link} from "react-router-dom";
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const View = React.forwardRef((props, ref) => {
  const [jobsheet , setJobsheet] = useState(null);
       
   const {id } =useParams();
    useEffect(()=>{
       if(id){
        console.log(id)
        getSingleJobsheet(id);
      }
      },[id])
      
    const getSingleJobsheet = async (id) => {
       const response = await axios.get(`http://localhost:4000/api/jobsheet/${id}`)
       if(response.status===200){
        setJobsheet(response.data)
        console.log( jobsheet)
       }
      }

      return (
    <div style={{ display: 'flex'}} ref={ref}>
       <div style={{margin:'20px'}}>
    <Card>
      
      <Card.Body>
        <Card.Title>Jobsheet Contact Details</Card.Title>
        <table className='styled-table'>
        <tbody>
              <tr >
                <th scode="row">Job No.{id}</th>
                {/* <td>Full Name:&nbsp; &nbsp;{jobsheet.full_name}</td> */}
              </tr>
              {/* <tr>
              <td>Address:&nbsp; &nbsp;{jobsheet.address}</td>
              <td>Postal Code:&nbsp; &nbsp;{jobsheet.postal_code}</td>
            </tr>
              <tr>
              <td>Contact No:&nbsp; &nbsp;{jobsheet.contact_no}</td>
              <td>Email:&nbsp; &nbsp;{jobsheet.email}</td>
              <td>Login Password:&nbsp; &nbsp;{jobsheet.password}</td>
            </tr>
            <tr>
              <td>Company:&nbsp; &nbsp;{jobsheet.company}</td>
              <td>Fault:&nbsp; &nbsp;{jobsheet.fault}</td>
              <td>Data Backup:&nbsp; &nbsp;{jobsheet.data_backup}</td>
            </tr>
            <tr>
              <td>Equipment:&nbsp; &nbsp;{jobsheet.equipment}</td>
              <td>Serial Number:&nbsp; &nbsp;{jobsheet.serial_no}</td>
              <td>Accessories:&nbsp; &nbsp;{jobsheet.accessories}</td>
            </tr>
            <tr>
              <td>Special Note:&nbsp; &nbsp;{jobsheet.equipment}</td>
              <td>Service Option:&nbsp; &nbsp;{jobsheet.service_option}</td>
              <td>Service Option Other:&nbsp; &nbsp;{jobsheet.service_option_other}</td>
            </tr>
            <tr>
              <td>Date Time::&nbsp; &nbsp;{jobsheet.date}</td>
              <td>Diagnosis:&nbsp; &nbsp;{jobsheet.diagnosis}</td>
              <td>Status:&nbsp; &nbsp;{jobsheet.status}</td>
            </tr> */}

            
        </tbody>
       </table>
        </Card.Body>
    </Card>
    </div>
    </div>
  )
}
);

export default View;