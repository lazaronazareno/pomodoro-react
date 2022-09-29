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

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = values.task
    if (taskList.length < 6){
      setTaskList([...taskList, newTask, `Break #${breakCounter + 1}`])
    } else {
      setTaskList([...taskList, newTask])
    }
    navigate('/')
  }

  useEffect(() => {
    setBreakCounter((taskList.length/2))
  },[taskList.length])

  return (
    <form onSubmit={onSubmit} className='task-form'>
      <label htmlFor='task'>Task
      </label>
      <input required name='task' id='task' onChange={onChange} type='text'/>
      <button className='menu-button' type='submit'>Submit</button>
    </form>
  )
}

export default FormTask;