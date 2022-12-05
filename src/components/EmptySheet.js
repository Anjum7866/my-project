import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import logo from '../logo1.png'
import '../App.css'
import { useParams} from "react-router-dom";
import axios from "axios";



const Emptysheet=  React.forwardRef((props, ref) =>  {
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
          diagonosis:"",
          status:""
        }
      );
      const {full_name,email, company, address, postal_code, contact_no, password, fault, data_backed_up, equipment, serial_no, accessories, special_notes, service_option_other, service_option, sales_reference, diagonosis, status} =jobsheet;
           
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
            console.log(jobsheet)
           }
          }
    
  return (
    <div ref={ref}>
      <Card>
      <Card.Body>
      <div className="row">
      <div className="col bg-warning1">
      <div className="row">
                <div className="col-md-2">
                  <img src={logo} alt='logo' style={{width:"150px"}}/>
                </div>
                <div className="col text-center">
                <Card.Title ><h3 >Client Service Sheet</h3></Card.Title>
                </div>
                <div className="col-md-4 border " style={{margintop:"20px", marginright:"10px"}}>
                      <label >Job No: {jobsheet._id}</label>
                      <label >Logged in by: {jobsheet.date}</label>
                     
                </div>
      </div>
      <Form  >
      <Card>
        <Card.Body>

        <Row >
        <Form.Group as={Col} md="6" >
          <Form.Label>Full name:</Form.Label>
          <label>{jobsheet.full_name || ""} </label>
         </Form.Group>
         <Form.Group as={Col} md="6" >
          <Form.Label>Company:</Form.Label>
          <label>{jobsheet.company || ""} </label>
          
        </Form.Group>
      </Row>
      <Row >
        <Form.Group as={Col} md="6" >
          <Form.Label>Address:</Form.Label>
          <label>{jobsheet.address || ""} </label>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Postal Code:</Form.Label>
          <label>{jobsheet.postal_code || ""} </label>
        </Form.Group>
      </Row>
      <Row >
        
        <Form.Group as={Col} md="6" >
          <Form.Label>Contact Number:</Form.Label>
          <label>{jobsheet.contact_no || ""} </label>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Email:</Form.Label>
          <label>{jobsheet.email || ""} </label>
        </Form.Group>
      </Row>
      <Row >
        
        <Form.Group as={Col} md="6" >
          <Form.Label>Login Password:</Form.Label>
          <label>{jobsheet.password || ""} </label>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Fault:</Form.Label>
          <label>{jobsheet.fault || ""} </label>
        </Form.Group>
      </Row>
      <Row >
      <Form>
      <Form.Label> Data Backed Up:{jobsheet.data_backed_up}:</Form.Label>
      </Form>
        
      </Row>
      
      
    <hr/>
    <Row >
    
            <h5>TERMS & CONDITIONS:-</h5>
            <h6>Neeltec Ltd cannot be held responsible for any loss of data throughout the repair period. 
                  <label><ul>
                <li>Verbal estimates are free of charger however if a detailed breakdown is required, then written estimates are £65 Exc. Vat</li>
                <li>Equipment not collected after 60 days will be disposed of with no liability to Neeltec Ltd.</li>
                <li>1 working day is required for collection of all equipment that is quoted on but not repaired.</li>
                <li>A storage charge of £5 per day will be levied on all equipment not collected after 30 days.</li>
                <li>All charges to be settled before collection of items can be made. All prices exclude Vat.  </li>
                <li>I hereby agree for Neeltec Ltd to transfer my personal Data to Apple for verification<br/>
                    and quality purposes, including confirming the service transaction and submitting a customer</li>
                </ul></label> </h6>
         
    </Row>
    <hr/>
      <Row >
    <Form.Group as={Col} md="6">
          <h6>Service Options:</h6>
             <label value={service_option || ""}></label>
             <h6>Service Options Other:</h6>
             <label value={service_option_other || ""}></label>
             
           </Form.Group>
        <Form.Group as={Col} md="6">
          <h6>Sales Reference:</h6>
          <label value={sales_reference || ""}></label>
         </Form.Group>
      </Row>
      
      
      <Row >
    <Form.Group as={Col} md="6" >
          <Form.Label>Equipment:</Form.Label>
          <label>{jobsheet.equipment || ""} </label>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Serial Number:</Form.Label>
          <label>{jobsheet.serial_no || ""} </label>

        </Form.Group>
      </Row>
      
      <Row >
    <Form.Group as={Col} md="6">
          <Form.Label>Accessories:</Form.Label>
          <label>{jobsheet.accessories || ""} </label>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Special Note:</Form.Label>
          <label>{jobsheet.special_notes || ""} </label>
        </Form.Group>
      </Row>
      <hr/>
    
      <Row >
        <Form.Group as={Col} md="12">
          <h6>Client Collection Acknowledgement:</h6>
          <h6>I hereby confirm that I have collected all items listed on this sheet.</h6>
          <h6>Client Signature:</h6>
          <h6>Client Name:</h6>
          <h6>Collection Date:</h6>
      </Form.Group>
      </Row>

      
      
        </Card.Body>
      </Card>
    </Form>
    </div>
    </div>
</Card.Body>
      </Card>

    </div>
    
  );
});
export default Emptysheet;