import React from 'react'
import {Link} from 'react-router-dom'
import LOGO from '../../assets/logos/raffler-logo.png'
import auth from '../../utils/auth'

const Nav = () =>{
    const logout = event => {
        event.preventDefault();
        auth.logout();
    };

    if (auth.loggedIn()) {
    return (
        <nav className='nav-container'>
            <Link to="/">
                <img className='logo-img' src={LOGO} alt='Raffler Text'/>
            </Link>
            <ul className='nav-items'>
                <Link to='/'> 
                    <li>Home</li>
                </Link>
                <li><Link to='/' onClick={logout}>Logout</Link></li> 
            </ul>
        </nav>
    )
}
    else {
        return(
            <nav className='nav-container'>
                <Link to="/">
                    <img className='logo-img' src={LOGO} alt='Raffler Text'/>
                </Link>
                <ul className='nav-items'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        )
    }
}


export default Nav;