import React from 'react'
import './navbar.css'
import blackLogo from '../../assets/img/blackLogo.png' 

const Navbar = () => {
  return (

    <div className="navbar">


      <div className="navbarUl">
        <img src={blackLogo} className="navbarLogo"/>
      
      
        <span className="menuType">Remove Background</span>
        <span className="menuType">Home</span>
        <span className="menuType">Pricing</span>
        <span className="menuType">Services</span>

      </div>

      <div className="menuLogo">
        <input type="checkbox" id="checkbox"/>
          <label for="checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
          </label>
      </div>


    </div>
    
        
  )
}

export default Navbar