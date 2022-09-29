import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../utils/icon/history.png'
import setting from '../../utils/icon/setting.png'
import add from '../../utils/icon/add.png'
import pomodoro from '../../utils/icon/pomodoro.png'
import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to='/'>
        <img src={pomodoro} alt='Pomodoro technique icons created by Freepik - Flaticon' />
        <span>Pomodoro</span>
      </Link>
      <Link to='/add'>
        <img src={add} alt='Plus icons created by dmitri13 - Flaticon' />
        <span>Add Task</span>
      </Link>
      <Link to='/settings'>
        <img src={setting} alt='Settings icons created by Pavel Kozlov - Flaticon' />
        <span>Settings</span>
      </Link>
      <Link to='/history'>
        <img src={history} alt='Pending icons created by Freepik - Flaticon' />
        <span>History</span>
      </Link>
    </header>
  )
}

export default Header;