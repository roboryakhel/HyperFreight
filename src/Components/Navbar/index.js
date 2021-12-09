import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcons, NavMenu,NavItem, NavLinks, NavBtn, NavBtnLink, Img } from './NavbarElements'
import {FaBars} from "react-icons/fa"
import pic from '../../Images/Nav_logo.svg'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo  to="/">
                    <Img src={pic}></Img>
                    {/* HyperFreight Inc. */}
                </NavLogo>
                <MobileIcons onClick={ toggle }>
                    <FaBars></FaBars>
                </MobileIcons>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/" >Home</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to="/about" >About</NavLinks>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLinks to="/services" >Services</NavLinks>
                    </NavItem> */}
                    <NavItem>
                        <NavLinks to="/contact" >Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/join">Join Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>

        </>
    )
}

export default Navbar