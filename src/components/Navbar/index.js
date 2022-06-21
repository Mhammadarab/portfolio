import React from 'react';
import {Nav, NavLink, BarsWrapper, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'; 
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img id='lo' src={require('../../images/logo.jpg')} alt='logo'/>
            </NavLink>
            <BarsWrapper>
                <FaBars></FaBars>
            </BarsWrapper>
            <NavMenu> 
                <NavLink to="/cv" activestyle="true">
                    CV
                </NavLink>
                <NavLink to="/contact" activestyle="true">
                    Contact me
                </NavLink>
                <NavLink to="/about" activestyle="true">
                    LinkedIn
                </NavLink>
                <NavLink to="/git" activestyle="true">
                    GitHub
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
};

export default Navbar;