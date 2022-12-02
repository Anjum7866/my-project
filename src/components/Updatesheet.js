import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from "react-router-dom";
import {toast} from "react-toastify"; 
import Sidebar from './Sidebar';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';
import {Card}  from 'react-bootstrap';

  
const Updatesheet =() => {
    const [state , setState] = useState(null);
    const {diagnosis, status} =state;
    const { id } = useParams();

    useEffect(()=>{
        // const response = axios.get(`http://localhost:4000/api/jobsheet/${id}`);
        // setData(response.data);
       console.log('xyz')
      axios.get(`http://localhost:4000/api/jobsheet/${id}`)
      .then((resp)=>setState({...resp.data[0]}));
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault();
            axios.put(`http://localhost:4000/api/jobsheet/${id}`,{
                diagnosis,
                 status
              }).then(()=>{
                  setState({diagnosis:"", status:""})
              }).catch((err) => toast.error(err.response.data));
              toast.success("Jobsheet Updated Successfully");
              setTimeout(()=>{
                  // history.push("/client");
              },500)
            }

  return (
    <div style={{ display: 'flex'}}>
       <Sidebar/>
       <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Jobsheet Details</Card.Title>
        <Card.Text>
         Job ID:{state._id}
        </Card.Text>
        <Card.Text>
         Name:{state.full_name}
        </Card.Text>
        <Card.Text>
         Email:{state.email}
        </Card.Text>
        <Card.Text>
         Contact:{state.contact_no}
        </Card.Text>
        <Link to="/client">
      <Button variant="primary" type="back">
        Go Back
      </Button >
      </Link>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Updatesheet