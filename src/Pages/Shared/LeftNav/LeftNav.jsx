import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
        <div>
            <h5>All Categories</h5>
            <div className='ps-4 mt-4'>
                {
                    categories.map(categories => <p key={categories.id}><NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary bg-secondary fs-5' : 'text-decoration-none text-secondary fs-5'} to={`/categories/${categories.id}`}>{categories.name}</NavLink></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;