import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>
      <Link to="/">
        myVideo
      </Link>
    </h1>
    <h2>
      <Link to="search">
        Back
      </Link>
    </h2>
  </header>
);

export default Header;
