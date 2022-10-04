import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../utils/icon/history.png'
import setting from '../../utils/icon/setting.png'
import add from '../../utils/icon/add.png'
import info from '../../utils/icon/info.png'
import timer from '../../utils/icon/timer.png'
import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <Link title='Pomodoro' to='/pomodoro'>
        <img src={timer} alt='Timer icons created by fjstudio - Flaticon' />
      </Link>
      <Link title='Add' to='/add'>
        <img src={add} alt='Plus icons created by dmitri13 - Flaticon' />
      </Link>
      <Link title='Settings' to='/settings'>
        <img src={setting} alt='Settings icons created by Pavel Kozlov - Flaticon' />
      </Link>
      <Link title='History' to='/history'>
        <img src={history} alt='Pending icons created by Freepik - Flaticon' />
      </Link>
      <Link title='Info' to='/'>
        <img src={info} alt='Info icons created by Freepik - Flaticon' />
      </Link>
    </header>
  )
}

export default Header;