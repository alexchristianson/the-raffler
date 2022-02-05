import React from 'react'
import {Link} from 'react-router-dom'
import LOGO from '../../assets/img/raffler-logo.png'
import auth from '../../utils/auth'

const Nav = () =>{

    const logout = event => {
        event.preventDefault();
        auth.logout();
      };
    if(auth.loggedIn()){
   
    return(
<nav className='nav-container'>

<ul className='nav-items'>
    <li>
<Link to="/">
<img className='logo-img' src={LOGO} alt='Raffler Text'/>
</Link>
</li>
   <a href='/'> <li>
        Home
    </li>
    </a>
    <li>
        [PLACEHOLDER]
    </li>
    <a href='/' className='login-btn' style={{textDecoration: 'none'}}  onClick={logout}>Logout</a>
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
        
        <ul className='nav-items'>
            <li>
        <Link to="/">
        <img className='logo-img' src={LOGO} alt='Raffler Text'/>
        </Link>
        </li>
           <a href='/'> <li>
                Home
            </li>
            </a>
            <li>
                [PLACEHOLDER]
            </li>
            <a href='/login' className='login-btn' style={{textDecoration: 'none'}}>Login</a>
            {/* <li className='login-btn'>
                <a href='/login'>Login</a>
            </li> */}
        </ul>
        </nav>
            )
}
}


export default Nav;