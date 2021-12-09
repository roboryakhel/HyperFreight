import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/index';
import About from './Pages/about';
import Contact from './Pages/contact';
import Services from './Pages/services';
import Join from './Pages/join';
import Sidebar from './Components/Sidebar/'
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        {/* <Route path='/services'>
          <Services/> */}
        {/* </Route> */}
        <Route path='/join'>
          <Join/>
        </Route>
        <Route path='/contact'>
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
