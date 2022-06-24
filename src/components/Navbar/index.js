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
            <NavLink target={"_blank"} href='https://drive.google.com/file/d/1ftrta7ibEmhLbt9n5bJNmA73WVrz0_Jk/view?usp=sharing'> CV </NavLink>
        </NavMenu>
    </Nav>
  );
};

export default Navbar;