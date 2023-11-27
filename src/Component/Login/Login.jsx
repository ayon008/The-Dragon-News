import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const location = useLocation();
    console.log(location);
    const url = location.state?.from || '/';
    const { signUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signUser(email, password)
            .then(result => {
                const user = result.user
                navigate(url);
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Container>
                <h3 className='text-center my-4'>Please Login</h3>
                <Form onSubmit={() => handleLogin(event)} className='w-25 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't have an account?<Link to='/register'>Register</Link>
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

export default Login;