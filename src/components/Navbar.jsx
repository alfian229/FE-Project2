import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
import Popup from "reactjs-popup";
import Login from '../pages/Login'
import { Button } from '../components/Button'

// for changing navbar  color
jquery(window).scroll(function () {
    jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-2 fixed-top">
                <div className="container-fluid ">
                {/* <NavLink to='/' className='navbar-logo'>
                             <img src="logo3.png"></img></NavLink> */}
                    <span className="navbar-brand font-weight-bolder">Graha Office</span>
                    <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <FaAlignRight className="nav-icon" /></span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            
                            
    
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/rooms">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/Bantuan">Help</NavLink>
                            </li>
                            
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/Login">Login</NavLink>
                            </li> */}

                            <li className="PopUp">
                            <Popup modal trigger={<Button buttonStyle='btn--outline'>Sign In</Button>}>
                                  {close => <Login close={close} />}
                            </Popup>
            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;