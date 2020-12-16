import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Sidenav from './components/Portfolio-sidnav/index'
import Home from './components/portfolio-home/index'
import Aboutme from './components//Aboutme/index'
import Resume from './components/Resume/index'
import Portfolio from './components/Portfolio/Portfolio'
function App() {

  return (
    <BrowserRouter>
   <>
     <Sidenav/>
     <Route path='/' exact={true} component={Home}/>
     <Route path='/aboutme'  component={Aboutme}/>
     <Route path='/resume'  component={Resume}/>
     <Route path='/portfolio'  component={Portfolio}/>
   </>
   </BrowserRouter>
  );
}

export default App;
