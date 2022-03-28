import React, { useState } from 'react';
import Rout from '../Rout/Rout';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const routes = [
        { id: 1, name: "Home", location: "/home"},
        {id: 2, name: "About", location: "/about"},
        {id: 3, name: "Contact us", location: "/contact"},
    ];

    const [open, setOpen] = useState(false);


    return (
        <header className='bg-indigo-400'>
            <nav className='w-full px-4 py-3 lg:px-0  lg:w-5/6 mx-auto flex items-center justify-between z-10 lg:z-0'>
                <div className="text-3xl font-semibold">Logo</div>
                <ul className={`w-full py-3 lg:py-0 absolute bg-indigo-300 lg:bg-inherit lg:static lg:w-auto  left-0  lg:flex -z-10 lg:z-0 duration-300 ease-in  ${ open? 'top-14': 'top-[-80px]'}` }>
                    {       
                        routes.map(rout => <Rout
                            rout={rout}
                            key={rout.id}
                        ></Rout>)
                    }
                </ul>
                <button onClick={() => setOpen(!open)} className='w-7 h-7 lg:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </button>
            </nav>
        </header>
    );  
};  

export default Header;