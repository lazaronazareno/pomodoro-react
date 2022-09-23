import React, { useState } from 'react';

const FormTask = ({setTaskList, taskList, counter}) => {
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
      setBreakCounter(breakCounter + 1)
      setTaskList([...taskList, newTask, `Break #${breakCounter + 1}`])
    } else {
      setTaskList([...taskList, newTask])
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='task'>Task
        <input required name='task' id='task' onChange={onChange} type='text'/>
      </label>
{/*       <label htmlFor='description'>Description
        <input required name='description' id='description' onChange={onChange} type='text'/>
      </label> */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormTask;