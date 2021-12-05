
import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero2 from '../Components/HeroSection/index2';
import Image from '../Images/contact.jpg';
import Footer from '../Components/Footer';
import Locations from '../Components/Locations';
  
const Contact = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  return (
    <>  
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero2 image={Image} 
      h1="Contact Us"
      par="J&R Transport  is here to help. While we are proud of the content of our web site, if there are still questions, please, feel free to contact us. We will answer all inquiries within 24 hours or, in most cases, instantly"
      />
      <Locations location={location} zoomLevel={15}/>
      <Footer/>
    </>
  );
};
  
export default Contact;