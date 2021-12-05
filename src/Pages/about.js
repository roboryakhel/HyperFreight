
import React, {Component, useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero2 from '../Components/HeroSection/index2';
import Image from '../Images/Img.jpg'
import Footer from '../Components/Footer';
import InfoSection from '../Components/InfoSection';
import {aboutObj1} from '../Components/InfoSection/Data';
import TextCardBig from '../Components/TextCardBig';

  
const About = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>  
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero2 image={Image} 
      h1="About"
      par="THE STORY OF NEW STAR
      We do what we promise and the rest takes care of itself.
      
      Our founder built this company to last on a foundation of determination and character. We continue to walk in those giant footsteps every day.
      
      Early on, we saw the value in perishable and cross border solutions, and we’ve carefully grown our company to provide expertise across a broad portfolio of transportation and logistics services. Every day, we look to improve our performance and value to our customers"
      />
      <TextCardBig />
      <InfoSection lightText={false} {...aboutObj1}/>
      <Footer />
    </>
  );
};
  
export default About;