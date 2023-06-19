import React from 'react';
import { useLoaderData } from 'react-router-dom';

const category = () => {
    const Ccourses=useLoaderData()
    return (
        <div>
            <h2>l : {Ccourses.length}</h2>
        </div>
    );
};

export default category;