
import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObj1} from '../Components/InfoSection/Data';
import TextCardBig from '../Components/TextCardBig';
import DryVanTransportation from '../Components/DryVan';
import Footer from '../Components/Footer';
  
const Home = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const TextCard1 = {
    heading: "Who We Are",
    desc1: "At HyperFreight Inc. our goal as your trusted logistics partner is to ensure that we deliver your promises on time.",
    desc2: "Our management philosophy incorporates smart systems in our daily operations to capture real-time information in order to create efficient and cost-effective logistics solutions for our valued customers."
  }

  return (
    <>  
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <TextCardBig {...TextCard1}/>
      <DryVanTransportation/>
      <InfoSection {...homeObj1} />
      <Footer />
    </>
  );
};
  
export default Home;