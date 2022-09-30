import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../context/tasklistContext';
import './styles.scss'

const FormTask = () => {
  const {taskList, setTaskList} = useContext(TaskContext)
  const [breakCounter, setBreakCounter] = useState(0)
  const [values, setValues] = useState({
    task:'',
  })
  const navigate = useNavigate()

  const onChange = (e) => {
    setValues({[e.target.name] : e.target.value})
  }

  const handleNavigate = () => {
    navigate('/pomodoro')
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = values.task
    if (taskList.length < 6){
      setTaskList([...taskList, newTask, `Break #${breakCounter + 1}`])
    } else {
      setTaskList([...taskList, newTask])
    }
  }

  useEffect(() => {
    setBreakCounter((taskList.length/2))
  },[taskList.length])

  return (
    <div className='form-container'>
      {taskList.length < 7 && (
        <form onSubmit={onSubmit} className='task-form'>
          <label htmlFor='task'>Task
          </label>
          <input required name='task' id='task' onChange={onChange} type='text'/>
          <button className='menu-button' type='submit'>Add</button>
        </form>
      )}
      <>
        {taskList && taskList.length > 0 && (
          <div className='task-form__list'>
            <h1>TaskList</h1>
            <ul>
              {taskList.map(task=> (
                <li key={task}>{task}</li>
              ))}
            </ul>
            {taskList.length < 7 && 
              <button className='menu-button' onClick={handleNavigate}>Go to Pomodoro</button>
            }
            {taskList.length >= 7 && (
              <>
                <span>Pomodoro is Full! Have a good break after finish.</span>
                <button className='menu-button' onClick={handleNavigate}>Go to Pomodoro</button>
              </>
            )}
          </div>
        )}
      </>
    </div>
  )
}

export default FormTask;