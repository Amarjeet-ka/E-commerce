import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import GoogleOath from '../googleOath/GoogleOath';
import {useNavigate} from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleReenterPasswordChange = (event) => {
    setReenterPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== reenterPassword) {
      setPasswordMatch(false);
      return; // Don't proceed with form submission
    }

    try {
      const response = await fetch('http://localhost:5000/api4/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password,name }),
      });

      if (response.ok) {
        // Form submission successful
        // Perform any necessary actions, such as redirecting to another page
        console.log('Form submitted successfully!');
        window.alert('User Registered sucessfully')
        navigate('/home', { state: { name } });
      
      } else {
        // Handle error case
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
    }

    // After form submission, reset the fields
    setEmail('');
    setName('');
    setPassword('');
    setReenterPassword('');
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api5/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('User Login Successful');
        window.alert('Welcome to our E-commerce Site');
        window.location.href = '/home';
      } else {
        console.log('Login failed');
        window.alert('Login Failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container fluid style={{ backgroundColor: 'gray', padding: '17%' }}>
      <div style={styles.container}>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="login" title="Login">
            <h2 style={styles.heading}>Login</h2>
            <form onSubmit={handleLoginSubmit} style={styles.form}>
              <br />
              <label style={styles.label}>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} style={styles.input} />
              </label>
              <br />
              <label style={styles.label}>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} style={styles.input} />
              </label>
              <br />
              <button type="submit" style={styles.button}>
                Submit
              </button>
            </form>
            <GoogleOath />
          </Tab>
          <Tab eventKey="register" title="Register">
            <h2 style={styles.heading}>Register</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
            <br />
              <label style={styles.label}>
                Name :
                <input type="text" value={name} onChange={handleNameChange} style={styles.input} />
              </label>
              <br />
              <label style={styles.label}>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} style={styles.input} />
              </label>
              <br />
              <label style={styles.label}>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} style={styles.input} />
              </label>
              <br />
              <label style={styles.label}>
                Re-enter Password:
                <input type="password" value={reenterPassword} onChange={handleReenterPasswordChange} style={styles.input} />
              </label>
              {!passwordMatch && <p>Passwords do not match.</p>}
              <button type="submit" style={styles.button}>
                Submit
              </button>
            </form>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '5px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    backgroundColor: 'blue',
    marginBottom: '20px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Login;
