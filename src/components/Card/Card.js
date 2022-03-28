import React from 'react';

const Card = ({ option }) => {
    const { name, price } = option;
    return (
        <div className='bg-indigo-400 text-center rounded-sm py-5 text-white'>
            <h3 className="text-2xl mb-2">{name}</h3>
            <span className="text-5xl font-semibold">{price}</span>
            <span className="text-xxl font-semibold text-gray-300">/month</span>
        </div>
    );
};

export default Card;    