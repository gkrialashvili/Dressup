import React from 'react';

import classes from './Navigation.module.scss';
import LogoutIcon from '../../assets/images/logout.svg'

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li onClick={props.onLogout}>
              <img src={LogoutIcon} alt='logout icon' />
            <p>გამოსვლა</p>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
