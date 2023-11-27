import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import EditorsInsides from '../../News/editorsInsides';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    console.log(categories);
    return (
        <div className='position-sticky top-0'>
            <h5>All Categories</h5>
            <div className='ps-4 mt-4'>
                {
                    categories.map(categories => <p key={categories.id}><NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-black px-3 py-2 bg-light fs-6' : 'text-decoration-none px-3 py-2  text-secondary fs-6'} to={`/category/${categories.id}`}>{categories.name}</NavLink></p>)
                }
            </div>
            <EditorsInsides show={{ md: 1, lg: 1, xs: 1 }}></EditorsInsides>
        </div>
    );
};

export default LeftNav;