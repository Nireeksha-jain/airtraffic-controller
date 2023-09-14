

import React from 'react';
import {
    Link,
    Route,
    Routes,
    BrowserRouter as Router,
  } from "react-router-dom";
import './NavBar.css';
import LandingPage from '../Landing/LandingPage';
import Operation from '../Operations/Operation';
import About from '../AboutUs/About';
import Profile from '../Profile/Profile';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@100&family=Comic+Neue&family=Roboto&family=Ubuntu:wght@300&display=swap');
</style>
function Navbar() {
    return (
        <Router>
          <nav>
            <div className="content">
              {/* <Link to="/">LOGIN</Link> */}
              <Link to="/operations">OPERATIONS</Link>
              <Link to="/about-us">ABOUT US</Link>
              <Link to="/profile">PROFILE</Link>
            
            </div>
          </nav>
    
          <div className="content-container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/operations"element={<Operation/>}/>
              <Route path="/about-us"element={<About/>}/>
              <Route path="/profile"element={<Profile/>}/>
            </Routes>
          </div>
        </Router>
      );
    };
    

export default Navbar;
