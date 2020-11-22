import React from 'react';

import { GoMarkGithub } from 'react-icons/go';

import './style.scss';

function Navbar() {

  return (
    <nav className="navbar-container">
      <div>
        <GoMarkGithub className="logo" fontSize="40" color="#fff" />
        <h1>Search for someone on github</h1>
      </div>

    </nav>
  )
}

export default Navbar;