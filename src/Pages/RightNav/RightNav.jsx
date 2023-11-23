import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../Shared/QZone/QZone';
import bg from '../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <Button variant="outline-primary" className='mb-2' style={{ width: '300px' }}><FaGoogle /> Login with google</Button>
            <Button variant="outline-secondary" style={{ width: '300px' }}><FaGithub></FaGithub>  Login with github</Button>
            <div className='mt-5'>
                <h4 className='my-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='p-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-4 position-relative'>
                <img src={bg} className='img-fluid' style={{ width: '100%', opacity: '0.8' }} alt="" />
                <div className='position-absolute text-white text-center' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <h3>Create an Amazing Newspaper</h3>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='bg-danger text-white fs-5 px-2 py-2'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;