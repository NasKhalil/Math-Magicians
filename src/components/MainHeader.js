import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <h2>Math magicians</h2>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/">
                Home
              </NavLink>
            </li>
            <li>
              |
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/calculator">
                Calculator
              </NavLink>
            </li>
            <li>
              |
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/quotes">
                Quotes
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
