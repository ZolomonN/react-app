import React from 'react';
import AuthContainer from './Login/AuthContainer';
import headerLogo from './../img/headerLogo.svg'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} />
      <AuthContainer />
    </header>
  );
};

export default Header;