import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className="car-logo">
        <h1>
          cars
        </h1>
      </div>
      <nav>
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>dealers</li>
          <li>about us</li>
        </ul>
      </nav>
      <div className='profileIcon'>
        <img src="../public/profile-icon.png" alt="profile icon" />
      </div>
    </header>
  )
}

export default Header