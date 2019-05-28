import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import FirebaseAuthContext from '../../context/FirebaseAuth';

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