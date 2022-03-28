import React from 'react';
import Benefit from '../Benefit/Benefit';

const Card = ({ option }) => {
    const { name, price, benifits} = option;
    return (
        <div className='bg-white text-center rounded-md overflow-hidden '>
            <h3 className="text-2xl bg-gray-200 py-3">{name}</h3>
            <div className="border-2 border-t-0 border-b-0 border-gray-300 py-3">
                <span className="text-5xl font-semibold">${price}</span>
                <span className="text-xxl font-semibold text-gray-300">/month</span>
                <div className=" px-3 mt-2 text-left">
                    <h3 className="text-xl font-semibold">Benifits</h3>
                    {
                        benifits.map(benefit => <Benefit
                        benefit={benefit}
                        />)
                    }
                </div>
            </div>
            <button className='bg-green-500 border-green-500 border-2 duration-300 w-full py-3 text-xl text-white hover:bg-transparent hover:text-green-500'>Buy now</button>
        </div>
    );
};

export default Card;    