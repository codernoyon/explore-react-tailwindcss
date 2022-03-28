import React from 'react';

const Rout = ({ rout }) => {
    const { name, location } = rout;
    return (
        <li className='ml-5'>
            <a href={location}>{name}</a>
        </li>
    );
};

export default Rout;