import React, { useState } from 'react';
import b from '../assets/images/b.svg';
import hamburger from '../assets/images/hamburger.svg';
import { navLinks } from '../constants';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='p-5 w-full max-h-fit sticky top-0 flex justify-between max-2xl:bg-transparent'>
            <div className=''>
                <img src={b} alt="logo" width={40} height={40} />
            </div>
            <ul className='flex gap-6  font-semibold text-white max-lg:hidden'>
                {navLinks.map((link) => (
                    <li key={link.label} className='hover:text-blue-300 active:text-blue-700 '>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='lg:hidden cursor-pointer text-right bg-transparent'>
                <img src={hamburger} alt="hamburger" width={30} height={30} onClick={handleOnClick} className='right-0 absolute mr-5' />
                {isOpen && (
                    <ul className="bg-transparent bg-none flex flex-col gap-2 lg font-semibold text-white lg:hidden mt-10">
                        {navLinks.map((link) => (
                            <li key={link.label} className='hover:text-blue-300 active:text-blue-700 bg-transparent'>
                                <a href={link.href} className=''>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar