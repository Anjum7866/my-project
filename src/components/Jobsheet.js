import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import logo from '../logo1.png'
import '../App.css'
import axios from "axios";
import {toast} from "react-toastify"; 
import { useNavigate } from "react-router-dom";


const initialState ={
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
  sales_reference:""
}

const Jobsheet=  React.forwardRef((props, ref) =>  {
  const navigate =useNavigate();
  
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [state , setState] = useState(initialState);
  const {full_name, company, address, postal_code, contact_no, password, fault, data_backed_up, equipment, serial_no, accessories, special_notes, service_option_other, service_option, sales_reference} =state;
  const [email, setEmail] = useState("");
  
    const full_nameRef = React.useRef();
    const companyRef = React.useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const handleSubmit =async (e) => {
    e.preventDefault();
    
    if(!full_name || !address || !postal_code || !email || !contact_no || !fault ){
      toast.error("All fields are required")
    }else{
      const response =await  axios.post("http://localhost:4000/api/jobsheet/",{
        full_name,
        company,
        address,
        postal_code,
        email,
        contact_no,
        password,
        fault,
        data_backed_up,
        serial_no,
        equipment, 
        accessories,
        special_notes,
        service_option,
        service_option_other,
        sales_reference

    })
    if(response.status ===200){
      setState(response.data);   
      toast.success("Jobsheet Added Successfully");
      const res = await fetch("http://localhost:4000/api/email/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email
        })
    });

    const data = await res.json();
    console.log(response.data);

    if (data.status === 401 || !data) {
        console.log("error")
    } else {
        setShow(true);
        setEmail("")
        console.log("Email sent")
    }
      navigate('/print')
    }
  }
  setValidated(true);
}

// const handleInputChange = (e) => {
//   setState({
//     ...state,

//     // Trimming any whitespace
//     [e.target.name]: e.target.value.trim()
//   });
// };

const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state, [name]:value});
};
  return (
    <div ref={ref}>
      <Card>
      <Card.Body>
      <div class="row">
      <div class="col-sm-8 offset-sm-2 bg-warning1">
      <div class="row">
                <div class="col-md-2">
                  <img src={logo} alt='logo' style={{width:"150px"}}/>
                </div>
                <div class="col text-center">
                <Card.Title className='mt-8'><h3 style={{margintop:"50px !important"}}>Client Service Sheet</h3></Card.Title>
                </div>
                <div class="col-md-4 border " style={{margintop:"20px", marginright:"10px"}}>
                      <label class="mt-2">Job No: ___________________</label>
                      <label >Logged in by: _____________</label>
                      <label>Date: ______________________</label>
                      <label>Time: ______________________</label>
                </div>
      </div>
      <Form className='mb-8' noValidate validated={validated} onSubmit={handleSubmit}>
      <Card>
        <Card.Body>

        <Row className="mb-1">
        <Form.Group as={Col} md="12" >
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            id="full_name"
            name="full_name" 
            value={full_name || ""} 
            ref={full_nameRef}
            onChange={handleInputChange}
            placeholder="Full name"
          />
          <Form.Control.Feedback type="invalid">
              Full name is required.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6" >
          <Form.Label>Company</Form.Label>
          <Form.Control type="text"
           id="company"
           name="company" 
           value={company || ""} 
           onChange={handleInputChange}
          placeholder="Company"  />
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text"
          id="address"
          name="address" 
          value={address || ""} 
          onChange={handleInputChange}
          placeholder="Address" required />
          <Form.Control.Feedback type="invalid">
           Address is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6" >
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text"
           id="postal_code"
           name="postal_code" 
           value={postal_code || ""} 
           onChange={handleInputChange}
          placeholder="Enter Postal Code" required />
          <Form.Control.Feedback type="invalid">
           Postal Code is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text"
          id="contact_no"
          name="contact_no" 
          value={contact_no || ""} 
          onChange={handleInputChange}
          placeholder="Enter Contact Number" required />
          <Form.Control.Feedback type="invalid">
           Contact Number is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="text"
          id="email"
          name="email" 
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)} 
          
          placeholder="Enter Email" required />
          <Form.Control.Feedback type="invalid">
           Email is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Login Password</Form.Label>
          <Form.Control type="text" 
          id="password"
          name="password" 
          value={password || ""} 
          onChange={handleInputChange}
          placeholder="Enter Login Password"/>
        </Form.Group>
      </Row>
      <Row className="mb-1">

        <Form.Group as={Col} md="6">
          <Form.Label>Fault</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  
          id="fault"
          name="fault" 
          value={fault || ""} 
          onChange={handleInputChange}
          placeholder="Enter Fault" required />
          <Form.Control.Feedback type="invalid" >
           Fault is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form>
      <Form.Label> Data Backed Up</Form.Label>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            key="bool"
            value="yes"
            label="yes"
            name="data_backup"
            type={type}
            id={`inline-${type}-1`}
            checked
          />
          <Form.Check
            inline
            label="no"
            name="data_backup"
            value="no"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
    <Row className="mb-1">
    <Form.Group as={Col} md="6" >
          <Form.Label>Equipment</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  
          id="equipment"
          name="equipment" 
          value={equipment || ""} 
          onChange={handleInputChange}
          placeholder="Enter Equipment"  />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Serial Number</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  
          id="serial_no"
          name="serial_no" 
          value={serial_no || ""} 
          onChange={handleInputChange}
          placeholder="Enter Serial Number"  />

        </Form.Group>
      </Row>
      <Row className="mb-1">
    <Form.Group as={Col} md="6">
          <Form.Label>Accessories</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  
          id="accessories"
          name="accessories" 
          value={accessories || ""} 
          onChange={handleInputChange}
          placeholder="Enter Accessories"  />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Special Note</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  
          id="special_notes"
          name="special_notes" 
          value={special_notes || ""} 
          onChange={handleInputChange}
          placeholder="Enter Serial Number"  />
        </Form.Group>
      </Row>
      <Row className="mb-1">
    <Form.Group as={Col} md="6">
          <h3>Service Options</h3>
              <Form>
              <Form.Check aria-label="service_option" label="Priority" />
              <Form.Check aria-label="option 2" label="3 Working Days" />
              <Form.Check aria-label="option 3" label="5-7 Working Days" />
              <Form.Check aria-label="option 4" label="Warranty" />
              <Form.Check aria-label="option 5" label="Sales" />
              <Form.Check aria-label="option 6" label="Return" />
              <Form.Check aria-label="option 7" label="Other" />
              <Form.Control type="text" 
              id="service_option_other"
              name="service_option_other" 
              value={service_option_other || ""} 
              onChange={handleInputChange}
              placeholder="Enter Service Option"/>
     </Form>
           </Form.Group>
        <Form.Group as={Col} md="6">
          <h3>Sales Reference:</h3>
          
              <Form.Check aria-label="option 2" label="Existing Client" />
              <Form.Check aria-label="option 3" label="Apple Phone" />
              <Form.Check aria-label="option 4" label="Referral" />
              <Form.Check aria-label="option 5" label="Website" />
              <Form.Check aria-label="option 1" label="Walk in" />
         </Form.Group>
      </Row>

      <Row className="mb-1">
        <Form.Group as={Col} md="12">
          <h3>Client Collection Acknowledgement:</h3>
          <h6>I hereby confirm that I have collected all items listed on this sheet.</h6>
          <h6>Client Signature:</h6>
          <h6>Client Name:</h6>
          <h6>Collection Date:</h6>
      </Form.Group>
      </Row>

      <Form.Group as={Col} md="12" className="mb-1">
        <Form.Check
          required
          feedback="You must agree before submitting."
          feedbackType="invalid" onClick={handleShow} 
        />I agree to these<a onClick={handleShow} > Terms and Conditions </a>and our Privacy Policy and Payment & Refund Policy.
      </Form.Group>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TERMS & CONDITIONS</Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>NeelTec Ltd cannot be held responsible for any loss of data throughout the repair period.</h5>
        <h6><ul>
                <li>Verbal estimates are free of charger however if a detailed breakdown is required, then written estimates are £65 Exc. Vat</li>
                <li>Equipment not collected after 60 days will be disposed of with no liability to NeelTec Ltd .</li>
                <li>1 working day is required for collection of all equipment that is quoted on but not repaired.</li>
                <li>A storage charge of £5 per day will be levied on all equipment not collected after 30 days.</li>
                <li>All charges to be settled before collection of items can be made. All prices exclude Vat.  </li>
                <li>I hereby agree for NeelTec Ltd to transfer my personal Data to Apple for verification<br/>
                    and quality purposes, including confirming the service transaction and submitting a customer</li>
                </ul></h6>
                </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button type="submit" >Submit</Button>
      
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
export default Jobsheet;