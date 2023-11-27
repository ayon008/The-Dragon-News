import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const checked = event.target.accept.checked;
        if (!checked) {
            alert('Please accept the terms & conditions')
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
        event.target.reset();
    }
    return (
        <div>
            <Container>
                <h3 className='text-center my-4'>Please Register</h3>
                <Form onSubmit={() => handleRegister(event)} className='w-25 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" name='name' required placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="text" name='photo' required placeholder="Photo Url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check name='accept' type="checkbox" label={<><Link to='/terms'>Accept terms & Conditions</Link></>} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <Form.Text className="text-secondary mt-3">
                        Already have an account?<Link to='/login'>Login</Link>
                    </Form.Text>
                    {/* <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Text className="text-success">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form>
            </Container>
        </div>
    );
};

export default Register;