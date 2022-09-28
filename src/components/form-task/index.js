import React, { useEffect, useState } from 'react';
import './styles.scss'

const FormTask = ({setTaskList, taskList, counter, setShowForm, showForm}) => {
  const [breakCounter, setBreakCounter] = useState(0)
  const [values, setValues] = useState({
    task:'',
/*     description:'' */
  })

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
    setShowForm(!showForm)
  }

  useEffect(() => {
    setBreakCounter((taskList.length/2))
  },[taskList.length])

  return (
    <form onSubmit={onSubmit} className='task-form'>
      <label htmlFor='task'>Task
      </label>
      <input required name='task' id='task' onChange={onChange} type='text'/>
{/*       <label htmlFor='description'>Description
        <input required name='description' id='description' onChange={onChange} type='text'/>
      </label> */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormTask;