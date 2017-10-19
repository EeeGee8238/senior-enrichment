'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to={'/'}><button>Home</button></Link>
      <Link to={'/students'}><button>Students</button></Link>
    </div>
  );
}

export default Navbar;
