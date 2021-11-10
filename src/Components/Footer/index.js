import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap, WebsiteRights, Img } from './FooterElements'
import FooterLogo from '../../Images/White_logo_footer.png'

const Footer = () => {
    return (
            <FooterContainer>
                <FooterWrap>
                    {/* <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/contact">Contact</FooterLink>
                                <FooterLink to="/services">Services</FooterLink>
                                <FooterLink to="/join">Join Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/contact">Contact</FooterLink>
                                <FooterLink to="/services">Services</FooterLink>
                                <FooterLink to="/join">Join Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/contact">Contact</FooterLink>
                                <FooterLink to="/services">Services</FooterLink>
                                <FooterLink to="/join">Join Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Join</FooterLinkTitle>
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/contact">Contact</FooterLink>
                                <FooterLink to="/services">Services</FooterLink>
                                <FooterLink to="/join">Join Us</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer> */}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                <Img src={FooterLogo}></Img>
                            </SocialLogo>
                            <WebsiteRights>HyperFreight © {new Date().getFullYear()} All right reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='//twitter.com' target='_blank' aria-label='Twitter'>
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='LinkedIn'>
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
    )
}

export default Footer