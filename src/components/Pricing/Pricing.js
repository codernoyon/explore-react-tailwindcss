import React from 'react';
import Card from '../Card/Card';

const Pricing = () => {
    const pricing = [
        {id: 1, name: "Free", price: 0},
        {id: 2, name: "Regular", price: 9.99},
        {id: 3, name: "Premium", price: 29.99},
    ]
    return (
        <section className='mt-24 w-5/6 mx-auto'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    pricing.map(price => <Card key={price.id} option={price}></Card>)
                }
            </div>
        </section>
    );
};

export default Pricing;