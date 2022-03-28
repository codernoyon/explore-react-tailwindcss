import React from 'react';
import Card from '../Card/Card';

const Pricing = () => {
    const pricing = [
        {id: 1, name: "Free", price: 0, benifits: [
            "React spring",
            "Framar Motion",
            "React Transition",
            "React Motion",
            "React Motion",
            "React Motion",
        ]},
        {id: 2, name: "Regular", price: 9.99, benifits: [
            "lifetime use",
            "use daily a limit",
            "daily user can use",
            "Styled Compotent",
            "Styled Compotent",
            "Styled Compotent",
        ]},
        {id: 3, name: "Premium", price: 29.99, benifits: [
            "lifetime use",
            "use daily a limit",
            "daily user can use",
            "React Reveal",
            "React Reveal",
            "React Reveal",
        ]},
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