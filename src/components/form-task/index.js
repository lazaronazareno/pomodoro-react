import React, { useState } from 'react';

const FormTask = ({setTaskList, taskList}) => {
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
    setTaskList([...taskList, newTask, 'Descanso'])
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