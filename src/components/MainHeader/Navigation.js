import React from 'react';

import classes from './Navigation.module.scss';
import LogoutIcon from '../../assets/images/logout.svg'
import LogoutIconMob from '../../assets/images/logoutMob.svg'

const Navigation = (props) => {

  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li onClick={props.onLogout}>
              <img src={props.isMobile? LogoutIconMob : LogoutIcon} alt='logout icon' />
              {
                  !props.isMobile &&  <p>გამოსვლა</p>
              }
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
