
import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero2 from '../Components/HeroSection/index2';
import Image from '../Images/services.jpg'
import Footer from '../Components/Footer'
  
const Services = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>  
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero2 image={Image} 
      h1="Our Services"
      par="We are your one stop solution for your all SCM needs. From planning , Analysis, state of the art technology, EDI capabilities for all modes of transportation , with live satellite tracking and security."
      />
      <Footer/>
    </>
  );
};
  
export default Services;