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
  axios.post("http://localhost:4000/api/users/login", {
    email:values.email,
    password:values.password
  }).then(res =>  {
        console.log(res.data);
        toast.success("Login Successfully");
        navigate('/dashboard')
      }).catch((err) => toast.error(err.response.data));
      
}

  return (
    <div className='maincontent'>
       <Card>
      <Card.Body>
      <div class="col-sm-8 offset-sm-2 bg-warning1">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </div>
     
      </Card.Body>
      </Card>
    
    </div>
  );
}

export default Login;