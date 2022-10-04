import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../utils/icon/history.png'
import setting from '../../utils/icon/setting.png'
import add from '../../utils/icon/add.png'
import info from '../../utils/icon/info.png'
import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to='/add'>
        <img src={add} alt='Plus icons created by dmitri13 - Flaticon' />
      </Link>
      <Link to='/settings'>
        <img src={setting} alt='Settings icons created by Pavel Kozlov - Flaticon' />
      </Link>
      <Link to='/history'>
        <img src={history} alt='Pending icons created by Freepik - Flaticon' />
      </Link>
      <Link to='/'>
        <img src={info} alt='Info icons created by Freepik - Flaticon' />
      </Link>
    </header>
  )
}

export default Header;