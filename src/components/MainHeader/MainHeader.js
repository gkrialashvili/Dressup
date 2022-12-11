import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.scss';
import Logo from '../../assets/images/logo.svg'

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
        <a href='/' className={classes.logo}>
            <img src={Logo} alt='icon'/>
        </a>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
