import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
    
            <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                   <div className="container">
                       <div className="navbar-header page-scroll">
                           <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           </button>
                           <a className="navbar-brand page-scroll" href="#page-top">Dev. <span className="brand">Portfolio</span></a>
                       </div>
                       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                           <ul className="nav navbar-nav navbar-right">
                               <li className="hidden">
                                   <a href="#page-top"></a>
                               </li>
                               <li>
                                   <a className="page-scroll" href="#about">About Us</a>
                               </li>
                               <li>
                                   <a className="page-scroll" href="#portfolio">Portfolio</a>
                               </li>
                               <li>
                                   <a className="page-scroll" href="#team">Team</a>
                               </li>
                               <li>
                               <Link to={'./login'}><button className='Login'>Login</button></Link>
                               </li>
                               <li>
                               <Link to={'./signup'}><button className='Signup'>Sign Up</button></Link>
                               </li>
                           </ul>
                       </div>
                   </div>
               </nav>
          </div>
            
        )
    }   
   }
   export default Navbar;