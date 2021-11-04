import React, { useEffect, useState } from 'react';
import './Navbar.css';
import netflix from '../images/netflix-logo.png';
import avatar from '../images/netflix-avatar.png';
import { useHistory } from 'react-router';

function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`navbar ${show && 'nav-black'}`}>
      <div className='nav-contents'>
        <img
          className='nav-logo'
          onClick={() => history.push('/')}
          src={netflix}
          alt='netflix-logo'
        />
        <img
          className='nav-avatar'
          onClick={() => history.push('/profile')}
          src={avatar}
          alt='netflix-avatar'
        />
      </div>
    </div>
  );
}

export default Navbar;
