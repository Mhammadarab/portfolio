import React from 'react';
import {Nav, NavLink, BarsWrapper, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'; 
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
    <Nav>
        <NavLink to="/">
            Mohammad Arab
        </NavLink>
        <BarsWrapper>
            <FaBars></FaBars>
        </BarsWrapper>
        <NavMenu> 
            <NavLink to="/cv" activestyle="true">
                CV
            </NavLink>
        </NavMenu>
    </Nav>
  );
};

export default Navbar;