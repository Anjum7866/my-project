import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import logo from './logo1.png'
import './App.css'

function App() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div >
      <Card>
      <Card.Body>
     
      <Form className='mb-8' noValidate validated={validated} onSubmit={handleSubmit}>
      <Card>
        <Card.Body>

        <Row className="mb-1">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
          />
          <Form.Control.Feedback type="invalid">
              Full name is required.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Company"  />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required />
          <Form.Control.Feedback type="invalid">
           Address is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter Postal Code" required />
          <Form.Control.Feedback type="invalid">
           Postal Code is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Contact Number" required />
          <Form.Control.Feedback type="invalid">
           Contact Number is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" required />
          <Form.Control.Feedback type="invalid">
           Email is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Login Password</Form.Label>
          <Form.Control type="text" placeholder="Enter Login Password"/>
        </Form.Group>
      </Row>
      <Row className="mb-1">

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Fault</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  placeholder="Enter Fault" required />
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
            label="yes"
            name="yes"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="no"
            name="no"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
    <Row className="mb-1">
    <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Equipment</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  placeholder="Enter Equipment"  />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Serial Number</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  placeholder="Enter Serial Number"  />
        </Form.Group>
      </Row>
      <Row className="mb-1">
    <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Accessories</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  placeholder="Enter Accessories"  />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Special Note</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  placeholder="Enter Serial Number"  />
        </Form.Group>
      </Row>
      <Row className="mb-1">
    <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Equipment</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  placeholder="Enter Equipment"  />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Serial Number</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}  placeholder="Enter Serial Number"  />
        </Form.Group>
      </Row>
      <Row className="mb-1">
    <Form.Group as={Col} md="6" controlId="validationCustom03">
          <h3>Service Options</h3>
              <Form>
              <Form.Check aria-label="option 1" label="Priority" />
              <Form.Check aria-label="option 2" label="3 Working Days" />
              <Form.Check aria-label="option 3" label="5-7 Working Days" />
              <Form.Check aria-label="option 4" label="Warranty" />
              <Form.Check aria-label="option 5" label="Sales" />
              <Form.Check aria-label="option 6" label="Return" />
              <Form.Check aria-label="option 7" label="Other" />
              <Form.Control type="text" placeholder="Enter Service Option"/>
     </Form>
           </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <h3>Sales Reference:</h3>
          
              <Form.Check aria-label="option 2" label="Existing Client" />
              <Form.Check aria-label="option 3" label="Apple Phone" />
              <Form.Check aria-label="option 4" label="Referral" />
              <Form.Check aria-label="option 5" label="Website" />
              <Form.Check aria-label="option 1" label="Walk in" />
         </Form.Group>
      </Row>

      <Row className="mb-1">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
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

      <Button type="submit">Submit</Button>
        </Card.Body>
      </Card>
    </Form>
   
</Card.Body>
      </Card>

    </div>
    
  );
}
export default App;