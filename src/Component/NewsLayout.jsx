import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/RightNav/RightNav';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-4'>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;