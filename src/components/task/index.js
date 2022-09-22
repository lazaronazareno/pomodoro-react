import React from 'react';
import Timer from '../timer';
import './styles.scss'


const Task = ({name, configuration}) => {
  console.log('config', configuration)
  return (
    <div className='task'>
      {name === 'Descanso' ?
      <>
        <h1>Task : {name}</h1>
        <Timer START_MINUTES={5} START_SECOND={configuration.START_SECOND} START_DURATION={configuration.START_DURATION}  />
      </>
       :
      <>
        <h1>Task : {name}</h1>
        <Timer START_MINUTES={configuration.START_MINUTES} START_SECOND={configuration.START_SECOND} START_DURATION={configuration.START_DURATION}  />
      </>
      }
    </div>
  );
}

export default Task;
