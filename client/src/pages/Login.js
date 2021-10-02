import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";


export default function Login() {

    const [ form, setForm ] = useState({
        username: '',
        email: '',
        password: ''
    });




const handlesubmit = e => {
    e.preventDefault()
    fetch('/api/v1/users/greeting', {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: form.username,
            password: form.password,
            email: form.email,
          }),
    })
//
    .then((res) => res.json())
    .then(data => {
        console.log(data)
    }) 
 
}

const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


    return (
        <div>
            <Form onSubmit={handlesubmit}
>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={handleChange} value={form.email} name='email'
 />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} value={form.password} name='password'
/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="username" onChange={handleChange} value={form.username} name='username'
/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}
