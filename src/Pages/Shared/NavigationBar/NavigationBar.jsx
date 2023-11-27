import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Component/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg='white' variant='white'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto d-flex align-items-center gap-2">
                                <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-danger' : 'text-decoration-none'} to="/">Home</NavLink>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav className='d-flex align-items-center'>
                                {user && <FaUserCircle style={{ fontSize: '2rem' }} />}
                                <Nav.Link eventKey={2} href="#memes">
                                    {
                                        user ? <Button onClick={() => handleLogOut()} variant="secondary">Log Out</Button> : <Link to="/login"><Button variant="secondary">Login</Button></Link>
                                    }
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;