import React from 'react'
import { SidebarContainer, Icon, ClosedIcon, SidebarLink, SidebarWrapper, SidebarMenu, SideBarBtnWrap, SidebarBtnLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='/services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBarBtnWrap>
                    <SidebarBtnLink to='join' onClick={toggle}>Join Us</SidebarBtnLink>
                </SideBarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
