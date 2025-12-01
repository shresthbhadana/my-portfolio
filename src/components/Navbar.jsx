import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left nav_items">Portfolio</div>
      <div className="right">
        <Link to="/" className="nav_items">Home</Link>
        <span className="nav_items" style={{ cursor: 'pointer' }} onClick={() => handleScroll('projects')}>Projects</span>
        <span className="nav_items" style={{ cursor: 'pointer' }} onClick={() => handleScroll('skills')}>Skills</span>
        <span className="nav_items" style={{ cursor: 'pointer' }} onClick={() => handleScroll('contact')}>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;