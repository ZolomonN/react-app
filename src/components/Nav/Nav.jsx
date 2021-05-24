import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarContainer from '../Sidebar/SidebarContainer';




const Nav = (props) => {
  return (
      <nav className = "nav">
        <ul className = 'nav__list'>
          <li><NavLink className = 'nav__link' to="/profile">Profile</NavLink></li>
          <li><NavLink className = 'nav__link' to="/dialogs">Messages*</NavLink></li>
          <li><NavLink className = 'nav__link' to="/users">Users</NavLink></li>
          <li><NavLink className = 'nav__link' to="/news">News*</NavLink></li>
          <li><NavLink className = 'nav__link' to="/music">Music*</NavLink></li>
          <li><NavLink className = 'nav__link' to="/settings">Settings*</NavLink></li>
        </ul>
        <SidebarContainer/>
      </nav>
    
  );
};

export default Nav;