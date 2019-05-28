import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import FirebaseAuthContext from '../../context/FirebaseAuth';

const Navbar = props => {
    const FirebaseUserAuth = useContext(FirebaseAuthContext);

    const UserLogout = () => {
        FirebaseUserAuth.logoutUser();
        props.history.push("/");
    };

    return (
        <div className='bundleNavbar'>
            <Link to='/'><div className='bundleNavbarLogo'>Logo</div></Link>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='packHacks'>Pack Hacks</Link>
            <Link to='/tsaGuides'>TSA Guides</Link>
            <Link to='/about'>About</Link>
            {!FirebaseUserAuth.user ? null : <button>Logout</button>}
        </div>
    );
};

export default Navbar;