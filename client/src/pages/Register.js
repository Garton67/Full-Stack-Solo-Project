import React, { useState } from 'react'
import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router'
import background from '../img/register.jpg'

export default function Register() {
    const [ form, setForm ] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    })
    const history = useHistory()
    const handleSubmit = e => {
        e.preventDefault()
        fetch('/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: form.username,
                password: form.password,
                email: form.email,
                firstName: form.firstName,
                lastName: form.lastName
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                alert("Thank you for registering")
                history.push('/login')
            }
        })
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const styling = {
        margin: '10px',
        color: 'white',
        width: '60%'
    }
    const inputStyling = {
        backgroundColor: 'none',
        textAlign: 'center',
        display: 'inlineBlock',
        opacity: '.6'
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
            <h1>Register</h1>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Form onSubmit={handleSubmit} style={styling}>
                <Form.Group>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly style={inputStyling}>
                                Username:
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" placeholder="Username" onChange={handleChange} value={form.username} name='username' style={inputStyling} />
                            </InputGroup>
                            </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={form.email} name='email' style={inputStyling} /><br />
                    <Form.Text className="text-muted" style={{textAlign: 'left', color: 'white'}}>
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} value={form.password} name='password' style={inputStyling} />
                </Form.Group>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" onChange={handleChange} value={form.firstName} name='firstName' style={inputStyling} />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" onChange={handleChange} value={form.lastName} name='lastName' style={inputStyling} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>     

            </div>
        </div>
    )
}