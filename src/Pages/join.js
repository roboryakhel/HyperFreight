
import React, {Component, useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero2 from '../Components/HeroSection/index2';
import Image from '../Images/Img.jpg'
import Footer from '../Components/Footer';
import JobApply from '../Components/JobApply';
  
const JoinUs = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>  
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero2 image={Image} 
      h1="Join Us"
      par="THE STORY OF NEW STAR We do what we promise and the rest takes care of itself."
      />
      <JobApply />
      <Footer />
    </>
  );
};
  
export default JoinUs;