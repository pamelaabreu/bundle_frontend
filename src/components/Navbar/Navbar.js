import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
    return (
        <div className='bundleNavbar'>
            <Link to='/'><div className='bundleNavbarLogo'>Logo</div></Link>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='packHacks'>Pack Hacks</Link>
            <Link to='/tsaGuides'>TSA Guides</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Navbar;