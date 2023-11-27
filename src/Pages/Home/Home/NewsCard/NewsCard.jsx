import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEye, FaPhoenixFramework, FaRegStar, FaShare, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import moment from 'moment'
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    const { published_date, img, name } = author;
    return (
        <div className='mb-4'>
            <Card className="">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img src={img} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
                        <div>
                            <p>{name}</p>
                            <p>{moment(published_date).format('MMMM D YYYY')}</p>
                        </div>
                    </div>
                    <div>
                        <FaShare />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {(details.length) < 250 ? details : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>See More </Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2'>
                            <p className='mb-0 fs-5'>{rating.number}</p>
                            <Rating
                                readonly
                                placeholderRating={rating?.number}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <FaEye className='h-fit' />
                        <p className='mb-0'>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;