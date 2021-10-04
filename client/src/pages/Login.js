import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import background from '../img/camping.jpg'

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          dispatch(setUser(data));
          history.push('/');
        }
      });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const newStyles = {
    margin: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    borderRadius: '20px',
    paddingBottom: '8px',
    paddingTop: '8px',
    color: 'white'
  }
  const buttonStyles = {
    border: '2px solid black',
    borderRadius: '15px',
    padding: '5px',
    backgroundColor: 'lightgrey',
    opacity: '.6',
    color: 'black'
  }
  const inputStyling = {
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    opacity: '.7'
}
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'noRepeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      minHeight: '900px'
     }}>
      <h1 style={{color: 'black'}}>Log In</h1>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Form onSubmit={handleSubmit} style={{
              color: 'whitesmoke',

            }}>
            <Form.Group controlId="formGroupEmail" >
                <Form.Label>Username:</Form.Label><br /><br />
                <Form.Control type="text" placeholder="Username" 
                onChange={handleChange} value={form.username} name='username' style={inputStyling} />
            </Form.Group><br />
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label><br /><br />
                <Form.Control type="password" placeholder="Password" 
                onChange={handleChange} value={form.password} name='password' style={inputStyling} />
            </Form.Group><br />
              <Form.Group as={Row}>
                  <Col sm={{ span: 10 }}>
                  <Button type="submit" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>Sign in</Button>
                  </Col>
              </Form.Group><br />
            <div style={buttonStyles}>
              <Form.Group as={Row} >
                <Col sm={{ span: 12 }}>
                <Form.Label>If you haven't registered, please do so by clicking the Register button.</Form.Label><br /><br />
                <Button as={Link} to='/register'>Register</Button>
                </Col>
              </Form.Group>
            </div>
        </Form>
        </div>
    </div>
  );
}