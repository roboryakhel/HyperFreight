import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero2 from '../Components/HeroSection/index2';
import Image from '../Images/Img.jpg'
import Footer from '../Components/Footer';
import InfoSection from '../Components/InfoSection';
import {aboutObj1} from '../Components/InfoSection/Data';
import TextCardBig from '../Components/TextCardBig';
import CompanyValues from '../Components/CompanyValues';
import Locations from '../Components/Locations';

  
const About = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  const location = {
    address: '',
    lat: 44.647340766400085,
    lng: -63.57236410440196
  }
  return (
    <>  
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero2 image={Image} 
      h1="Mission & Vision"
      par="To Empower Our Valued Customers in Achieving Their Potential –  By Simplifying Your Logistics Needs."/>
      <CompanyValues/>
      <Locations location={location} zoomLevel={15}/>
      <Footer />
    </>
  );
};
  
export default About;