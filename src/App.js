import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/index';
import About from './Pages/about';
import Contact from './Pages/contact';
// import Services from './Pages/services';
import Join from './Pages/join';
// import Sidebar from './Components/Sidebar/'
// import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route path='/about' element={<About/>}>
        </Route>
        {/* <Route path='/services'>
          <Services/> */}
        {/* </Route> */}
        <Route path='/join' element={<Join/>}>
        </Route>
        <Route path='/contact' element={<Contact/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;