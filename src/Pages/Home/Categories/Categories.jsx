import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Categories = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            {
                data.map(d => <NewsCard key={d._id} news={d}></NewsCard>)
            }
        </div>
    );
};

export default Categories;