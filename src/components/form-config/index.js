import React, {useContext} from 'react'
import { ConfigContext } from '../../context/configContext'
import './styles.scss'

const ConfigForm = () => {
  const {configuration, setConfiguration} = useContext(ConfigContext)

  const onChange = (e) => {
    setConfiguration({...configuration, [e.target.name] : e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setConfiguration(configuration)
  }

  return (
    <form className='config-form' onSubmit={onSubmit}>
      <h1>Settings</h1>
      <label htmlFor='minutes'> Minutes
        <div>
          <input name='START_MINUTES' id='minutes' onChange={onChange} type="range" min="0" max="60" step="5" value={configuration.START_MINUTES}/>
          <span>{configuration.START_MINUTES}</span>
        </div>
      </label>
      <label htmlFor='seconds'> Seconds
        <div>
          <input name='START_SECOND' id='seconds' onChange={onChange} type="range" min="0" max="60" step="5" value={configuration.START_SECOND}/>
          <span>{configuration.START_SECOND}</span>
        </div>
      </label>
      <label htmlFor='break_minutes'> Break Minutes
        <div>
          <input name='BREAK_MINUTES' id='break_minutes' onChange={onChange} type="range" min="0" max="60" step="5" value={configuration.BREAK_MINUTES}/>
          <span>{configuration.BREAK_MINUTES}</span>
        </div>
      </label>
      <label htmlFor='last_minutes'> Last Pomodoro Minutes
        <div>
          <input name='LAST_MINUTES' id='last_minutes' onChange={onChange} type="range" min="0" max="60" step="5" value={configuration.LAST_MINUTES}/>
          <span>{configuration.LAST_MINUTES}</span>
        </div>
      </label>
      <button className='menu-button' type='submit'>Submit</button>
    </form>
  )
}

export default ConfigForm