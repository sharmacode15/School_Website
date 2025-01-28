import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="logo">School Name</div>
      <nav>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Academics</a>
        <a href="/">Admissions</a>
        <a href="/">Events</a>
        <a href="/">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;