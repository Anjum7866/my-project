import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {toast} from "react-toastify"; 
import { useNavigate } from "react-router-dom";


const Login = () =>{
  const navigate =useNavigate();
  const [validated] = useState(false);
  const [values, setValues] =useState({
    email:"",
    password:"",
    showpassword: false
  });
  
  // const handlePassVisibility = ()=>{
  //   setValues({
  //     ...values,
  //     showpassword:!values.showpassword,
  //   })
  // }
  const handleSubmit = (e) => {  
    e.preventDefault();
    if( !values.email || !values.password){
      toast.error("All fields are required")
    }else{
      axios.post("http://localhost:4000/api/users/login", {
        email:values.email,
        password:values.password
      }).then(response =>  {
        console.log(response.data);
        toast.success("Login Successfully");
        navigate('/dashboard')
      }).catch((err) =>
      toast.error("invalid credential"));
      
}
  }
  return (
    <div >
       <Card >
        <Card.Title className='text-center mt-10'>
          Admin Login
        </Card.Title>
      <Card.Body style={{ margin:"auto" }} >
        <Card className='col-sm-12 '>
        <div className="container mt-2" >
        <div className="d-flex justify-content-center">
    
      <Form className='mt-2 col-lg-12' noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e)=>setValues({...values, email:e.target.value})} placeholder="Enter email" />
        <Form.Control.Feedback type="invalid">
              Email is required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e)=>setValues({...values, password:e.target.value})} placeholder="Password" />
        <Form.Control.Feedback type="invalid">
             Password is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </div>
     </div>
        </Card>
      
      </Card.Body>
      </Card>
    
    </div>
  );
}

export default Login;