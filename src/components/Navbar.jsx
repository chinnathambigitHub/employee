import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';
function Navbar() {
  return (
    <nav class='nav'>
      <div className='div'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tango-logo-bw.svg/120px-Tango-logo-bw.svg.png" alt="" />
        </div>
      <ul className="navbar">
        <li>
          <Link to="/"><h4>HOME</h4></Link>
        </li>
        <li>
          <Link to="/About"><h4>ABOUT</h4></Link>
        </li>
        <li>
          <Link to="/Contact"><h4>CONTACT</h4></Link>
        </li>
        <li>
          <Link to="/login"><h4>LOGIN</h4></Link>
        </li>

      </ul>

    </div>
    </nav>
  );
}

export default Navbar; 
