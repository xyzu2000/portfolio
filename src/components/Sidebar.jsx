import React from 'react';
import { sideLinks } from '../constants';
import SideLink from './SideLink';



const Sidebar = () => {
    return (
        <nav className='sticky left-0 top-[40%] w-0 max-sm:hidden'>
            {sideLinks.map((link) => (
                <SideLink key={link.label} link={link} />
            ))}
        </nav>
    )
}

export default Sidebar