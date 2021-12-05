
import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import InfoSection3 from '../Components/InfoSection3';
import { homeObj1, homeObj2 } from '../Components/InfoSection/Data';
import { threeColRow } from '../Components/InfoSection3/Data';
import TextCardBig from '../Components/TextCardBig';
import BoardSection from '../Components/BoardSection';
import Footer from '../Components/Footer';
  
const Home = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>  
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      {/* {console.log(home33)} */}
      {/* <InfoSection {...homeObj2} /> */}
      {/* <InfoSection3 {...threeColRow} /> */}
      <TextCardBig />
      <BoardSection />
      <InfoSection {...homeObj1} />
      <Footer />
    </>
  );
};
  
export default Home;