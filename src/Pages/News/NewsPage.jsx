import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowCircleLeft, FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsides from './editorsInsides';

const NewsPage = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;
    return (
        <div>
            <div className='border'>
                <Card>
                    <Card.Img className='p-3' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id}`}><Button variant="primary" className='bg-danger text-white'><FaArrowLeft /> All News In This Category</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <EditorsInsides show={{ lg: 3, md: 2, xs: 1 }}></EditorsInsides>
        </div>
    );
};

export default NewsPage;