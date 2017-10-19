'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to={'/'}><h1>Home</h1></Link>
      <Link to={'/students'}><h1>Students</h1></Link>
    </div>
  );
}

export default Navbar;
