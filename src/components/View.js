import React, {useState, useEffect} from 'react'
import { useParams} from "react-router-dom";
import axios from "axios";
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import adminLayout from "../hoc/adminLayout";

const View = React.forwardRef((props, ref) => {
  const {id } =useParams();
  const [jobsheet , setJobsheet] = useState(
    {
      full_name: "",
      company:"",
      address:"",
      postal_code:"",
      email: "",
      contact_no: "",
      password:"",
      fault: "",
      data_backed_up:"",
      equipment:"",
      serial_no:"",
      accessories:"",
      special_notes:"", 
      service_option_other:"", 
      service_option:"",
      sales_reference:"",
      diagnosis:"",
      status:""
    }
  );
  const {full_name, company, address, postal_code, contact_no, password, fault, data_backed_up, equipment, serial_no, accessories, special_notes, service_option_other, service_option, sales_reference, diagnosis, status} =jobsheet;
  const [show, setShow] = useState(false);
    
    const {email} =jobsheet;
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(jobsheet.email)
    const res = await fetch("http://localhost:4000/api/machine/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email, full_name, id
        })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
        console.log("error")
    } else {
        setShow(true);
        
        console.log("Email sent")
    }
}

    useEffect(()=>{
       if(id){
        console.log(id)
        getSingleJobsheet(id);
      }
      },[id])
      
    const getSingleJobsheet = async (id) => {
       const response = await axios.get(`http://localhost:4000/api/jobsheet/${id}`)
       if(response.status===200){
        setJobsheet(response.data[0])
        console.log(response.data[0], 'response')
        console.log(jobsheet)
       }
      }
 const onSubmit = async e =>{
  e.preventDefault();
  await axios.put(`http://localhost:4000/api/jobsheet/${id}`, jobsheet)
 }
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setJobsheet({...jobsheet, [name]:value});
};
      return (
    <div  style={{margin:'50px'}} ref={ref}>
    
    <Card>

      
      <Card.Body>
        <Card.Title className='text-center'>View Jobsheet</Card.Title>
        <div className="d-flex text-muted">
        <table className="table">
        <tbody>
              <tr >
                <th scode="row">Job No.{id}</th>
                <td>Full Name:&nbsp; &nbsp;{jobsheet.full_name}</td>
              </tr>
              <tr>
              <td>Address:&nbsp; &nbsp;{jobsheet.address}</td>
              <td>Postal Code:&nbsp; &nbsp;{jobsheet.postal_code}</td>
            </tr>
              <tr>
              <td>Contact No:&nbsp; &nbsp;{jobsheet.contact_no}</td>
              <td>Email:&nbsp; &nbsp;{jobsheet.email}</td>
            </tr>
            <tr>
            <td>Login Password:&nbsp; &nbsp;{jobsheet.password}</td>
              <td>Company:&nbsp; &nbsp;{jobsheet.company}</td>
            </tr>
            <tr>
            <td>Fault:&nbsp; &nbsp;{jobsheet.fault}</td>
              <td>Data Backup:&nbsp; &nbsp;{jobsheet.data_backup}</td>
            </tr>
            <tr>
              <td>Equipment:&nbsp; &nbsp;{jobsheet.equipment}</td>
              <td>Serial Number:&nbsp; &nbsp;{jobsheet.serial_no}</td>
            </tr>
            <tr>
            <td>Accessories:&nbsp; &nbsp;{jobsheet.accessories}</td>
              <td>Special Note:&nbsp; &nbsp;{jobsheet.equipment}</td>
            </tr>
            <tr>
            <td>Service Option:&nbsp; &nbsp;{jobsheet.service_option}</td>
              <td>Service Option Other:&nbsp; &nbsp;{jobsheet.service_option_other}</td>
            </tr>
            <tr>
              <td>Date Time::&nbsp; &nbsp;{jobsheet.date}</td>
              <td>Diagonosis:&nbsp; &nbsp;{jobsheet.diagnosis}</td>
            </tr>
            <tr>
              <td>Status:&nbsp; &nbsp;{jobsheet.status}</td>
              <td><Form.Control
            required
            type="text"
            id="diagnosis"
            name="diagnosis" 
            onChange={handleInputChange}
            placeholder="Enter diagnosis"
          /></td>
            </tr>
            <tr>
            <td><Form.Control
            required
            type="text"
            id="status"
            name="status" 
            placeholder="Enter Status"
            onChange={handleInputChange}
          /></td>
           <Button variant='success' onClick={sendEmail}>Request a machine</Button>
            </tr>
            <tr>
              <Button type='submit' onClick={onSubmit}>Submit</Button>
            </tr>

            
        </tbody>
       </table>
       </div>
        </Card.Body>
    </Card>
    </div>
  )
}
);

export default adminLayout(View);