import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <i className='fas fa-code' /> Urban Sdk
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/crash_predictions'>Crash Predictions</Link>
          </li>
          <li>
            <Link to='/zone_counts'>Zone Counts</Link>
          </li>
          <li>
            <Link to='/#'>Predictions vs Actual</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;