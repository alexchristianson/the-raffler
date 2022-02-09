import React from 'react'
import {Link} from 'react-router-dom'
import LOGO from '../../assets/logos/raffler-logo.png'
import auth from '../../utils/auth'

const Nav = () =>{

    const logout = event => {
        event.preventDefault();
        auth.logout();
      };
    if(auth.loggedIn()){
   
    return(
<nav className='nav-container'>
<Link to="/">
<img className='logo-img' src={LOGO} alt='Raffler Text'/>
</Link>
<ul className='nav-items'>
   <a href='/'> <li>
        Home
    </li>
    </a>
    <li>
        [PLACEHOLDER]
    </li>
    <li><a href='/' onClick={logout}>Logout</a></li> 
    {/* <li className='login-btn'>
        <a href='/login'>Login</a>
    </li> */}
</ul>
</nav>
    )
}
else{
    return(
        <nav className='nav-container'>
        <Link to="/">
                    <img className='logo-img' src={LOGO} alt='Raffler Text'/>
                </Link>
        <ul className='nav-items'>
            <li><a href='/'>Home</a></li>
            <li>
                [PLACEHOLDER]
            </li>
            <li><a href='/login'>Login</a></li>
        </ul>
        </nav>
            )
}
}


export default Nav;