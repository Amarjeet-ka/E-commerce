import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export default function Header() {
  const [complaint, setComplaint] = useState('');
  const [purchaseId, setPurchaseId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:5000/api3/postmessages';
    const payload = {
      purchaseId: purchaseId,
      text: complaint
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('Message sent successfully');
        window.alert('Your Complaint has been registered sucessfully ');
        // Handle success, e.g., show a success message
      } else {
        console.error('Failed to send message');
        window.alert('Failed to send complaint');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      window.alert('Something went wrong');
      // Handle error, e.g., show an error message
    }
  };

  return (
    <Container fluid style={{ color: 'white', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'center', color: 'black', paddingTop: '110px', paddingBottom: '20px' }}>
        <FloatingLabel controlId="floatingTextarea2" label="Complaints" style={{ padding: '2%' }}>
          <Form.Group controlId="purchaseId">
            <Form.Control
              style={{ marginBottom: '5%' }}
              type="text"
              placeholder="Enter Purchase ID"
              value={purchaseId}
              onChange={(e) => setPurchaseId(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Enter Complaints"
            style={{ height: '380px', width: '600px', color: 'black', backgroundColor: 'white' }}
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          />
        </FloatingLabel>
      </div>

      <div style={{ textAlign: 'center', paddingBottom: '90px' }}>
        <Button variant="success" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Container>
  );
}
