import React from 'react'
import {Link} from 'react-router-dom'
import LOGO from '../../assets/img/raffler-logo.png'


const Nav = () =>{
    // function theNav(){
    // if(Auth.loggedIn()){
    //     return(
    //         <nav className='nav-container'>
            
    //         <ul className='nav-items'>
    //             <li>
    //         <img className='logo-img' src={LOGO} alt='Raffler Text'/>
    //         </li>
    //             <li>
    //                 Home
    //             </li>
    //             <li>
    //                 Something
    //             </li>
    //             <li className='login-btn'>
    //                 Login
    //             </li>
    //         </ul>
    //         </nav>
    //             )
    //         } else{
    //             return(
    //                 <nav className='nav-container'>
                    
    //                 <ul className='nav-items'>
    //                     <li>
    //                 <img className='logo-img' src={LOGO} alt='Raffler Text'/>
    //                 </li>
    //                     <li>
    //                         Home
    //                     </li>
    //                     <li>
    //                         Something
    //                     </li>
    //                     <li className='login-btn'>
    //                         logout
    //                     </li>
    //                 </ul>
    //                 </nav>
    //                     )
    //                 }
    //             }
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


export default Nav;