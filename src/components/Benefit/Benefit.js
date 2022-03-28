import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = ({benefit}) => {
    return (
        
        <p className='mt-2 text-left'><CheckCircleIcon className='w-6 h-6 text-green-500 inline-block mr-2'/> {benefit}</p>
        
    );
};

export default Benefit; 