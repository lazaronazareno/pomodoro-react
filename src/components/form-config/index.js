import React, {useState} from 'react'
import './styles.scss'

const ConfigForm = ({setConfiguration, showSettings, setShowSettings}) => {
  const [breakCounter, setBreakCounter] = useState(0)
  const [values, setValues] = useState({
    START_MINUTES: '',
    START_SECOND:'',
    LAST_MINUTES : '',
    BREAK_MINUTES : '',
    START_DURATION: '10'
  })

  const onChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setConfiguration(values)
    setShowSettings(!showSettings)
  }

  return (
    <form className='config-form' onSubmit={onSubmit}>
      <h1>Settings</h1>
      <label htmlFor='minutes'> Minutes
        <div>
          <input name='START_MINUTES' id='minutes' onChange={onChange} type="range" min="0" max="60" step="5" value={values.START_MINUTES}/>
          <span>{values.START_MINUTES}</span>
        </div>
      </label>
      <label htmlFor='seconds'> Seconds
        <div>
          <input name='START_SECOND' id='seconds' onChange={onChange} type="range" min="0" max="60" step="5" value={values.START_SECOND}/>
          <span>{values.START_SECOND}</span>
        </div>
      </label>
      <label htmlFor='break_minutes'> Break Minutes
        <div>
          <input name='BREAK_MINUTES' id='break_minutes' onChange={onChange} type="range" min="0" max="60" step="5" value={values.BREAK_MINUTES}/>
          <span>{values.BREAK_MINUTES}</span>
        </div>
      </label>
      <label htmlFor='last_minutes'> Last Pomodoro Minutes
        <div>
          <input name='LAST_MINUTES' id='last_minutes' onChange={onChange} type="range" min="0" max="60" step="5" value={values.LAST_MINUTES}/>
          <span>{values.LAST_MINUTES}</span>
        </div>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ConfigForm