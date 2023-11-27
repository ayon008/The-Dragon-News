import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Component/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p><small className="text-secondary fs-5">Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center gap-3 bg-light p-3'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={100} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;