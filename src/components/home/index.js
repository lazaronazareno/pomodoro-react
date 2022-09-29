import React from 'react'
import { Link } from 'react-router-dom'
import pomodoro from '../../utils/icon/pomodoro.png'
import tomato from '../../utils/icon/tomato.png'
import github from '../../utils/icon/github.svg'
import linkedin from '../../utils/icon/linkedin.svg'
import './styles.scss'

const Home = () => {
  return (
    <main className='home'>
      <div className='home__first'>
        <img src={pomodoro} alt='Pomodoro technique icons created by Freepik - Flaticon' />
        <h1>Pomodoro App</h1>
        <Link className='menu-button' to='/pomodoro'>Go</Link>
      </div>
      <div className='home__second'>
        <img src={tomato} alt='Pomodoro icons created by Freepik - Flaticon' />
        <div>
          <h1>Pomodoro technique</h1>
          <span>The Pomodoro Technique was developed in the late 1980s by then university student Francesco Cirillo. Cirillo was struggling to focus on his studies and complete assignments. Feeling overwhelmed, he asked himself to commit to just 10 minutes of focused study time. Encouraged by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen timer, and the Pomodoro technique was born.</span>
        </div>
      </div>
      <div className='home__third'>
        <h1>Method</h1>
        <ul>
          <li>Get a to-do list and a timer.</li>
          <li>Set your timer for 25 minutes, and focus on a single task until the timer rings.</li>
          <li>When your session ends, mark off one pomodoro and record what you completed.</li>
          <li>Then enjoy a five-minute break.</li>
          <li>After four pomodoros, take a longer, more restorative 15-30 minute break.</li>
        </ul>
        <a href='https://todoist.com/es/productivity-methods/pomodoro-technique'>Continue Reading...</a>
        <Link className='menu-button' to='/pomodoro'>Try it!</Link>
      </div>
      <footer>
        <span>Pomodoro App</span>
        <a href='https://github.com/lazaronazareno'>
          <img src={github} alt='Github' />
          <span>Github</span>
        </a>
        <a href='https://www.linkedin.com/in/lazaro-vega-sanchez'>
          <img src={linkedin} alt='Linkedin' />
          <span>Linkedin</span>
        </a>
      </footer>
    </main>
  )
}

export default Home;