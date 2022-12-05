import React, {useState, useEffect} from 'react';
import '../App.css';
import Alert from 'react-bootstrap/Alert';
import { useParams} from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Machine = () => {
    const [show, setShow] = useState(false);
    const {id } =useParams();
    const [jobsheet , setJobsheet] = useState({data:""});
    
    const {email} =jobsheet;
    
    useEffect(()=>{
        if(id){
         console.log(id)
         console.log(jobsheet.email)
         getSingleJobsheet(id);
       }
       },[id])
       
     const getSingleJobsheet = async (id) => {
        const response = await axios.get(`http://localhost:4000/api/jobsheet/${id}`)
        if(response.status===200){
         setJobsheet(response.data)
         console.log(jobsheet.email)
        }
       }
  
    const sendEmail = async (e) => {
        e.preventDefault();
        console.log(jobsheet.email)
        const res = await fetch("http://localhost:4000/api/machine/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
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
  
  
  return (
    <div >
         { show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Your Request to machine is send Succesfully 
                                    </Alert> : ""
            }
       <Button variant='success' onClick={sendEmail}>Request a machine</Button>
                 
    </div>
  )
}

export default Machine
