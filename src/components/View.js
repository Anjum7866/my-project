import React, {useState, useEffect} from 'react'
import { useParams, Link} from "react-router-dom";
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// const initialState ={
//     full_name: "",
//     company:"",
//     address:"",
//     postal_code:"",
//     email: "",
//     contact_no: "",
//     password:"",
//     fault: "",
//     data_backed_up:"",
//     equipment:"",
//     serial_no:"",
//     accessories:"",
//     special_notes:"", 
//     service_option_other:"", 
//     service_option:""
//   }
const View = () => {
    const [jobsheet , setJobsheet] = useState();
    
    const {id } =useParams();
    useEffect(()=>{
        axios.get(`http://localhost:4000/api/jobsheet/${id}`)
        .then((resp)=>setJobsheet({...resp.data[0]}));
      },[id])

      return (
    <div style={{ display: 'flex'}}>
       <Sidebar/>
       <div style={{margin:'20px'}}>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Jobsheet Contact Details</Card.Title>
        <Row className="mb-1">
        <Form.Group as={Col} md="12" >
          <Form.Label>Full name:{jobsheet.full_name}</Form.Label>
        </Form.Group>
      </Row>
        <Card.Text>
        Job ID:{id}
        </Card.Text>
        <Card.Text>
         Name:{jobsheet.full_name}
        </Card.Text>
        <Card.Text>
         Email:{jobsheet.email}
        </Card.Text>
        <Card.Text>
         Contact:{jobsheet.contact}
        </Card.Text>
        <Link to="/client">
      <Button variant="primary" type="back">
        Go Back
      </Button >
      </Link>
        </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default View