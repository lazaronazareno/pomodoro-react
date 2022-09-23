import React from 'react';
import Timer from '../timer';
import './styles.scss'


const Task = ({name, configuration, taskList, counter, setCounter, isBreak, isLast, setIsBreak}) => {
  return (
    <>
      {name === taskList[counter] && (
        <>
          {isBreak && !isLast ?
            <div className='task break'>
              <h1>{name}</h1>
              <Timer
               START_MINUTES={0} 
               START_SECOND={5} 
               START_DURATION={configuration.START_DURATION} 
               counter={counter} 
               setCounter={setCounter} 
               isBreak={isBreak} 
               setIsBreak={setIsBreak}  
              />
            </div>
          :
            <div className='task doing'>
              <h1>Task : {name}</h1>
              <Timer
               START_MINUTES={configuration.START_MINUTES} 
               START_SECOND={configuration.START_SECOND} 
               START_DURATION={configuration.START_DURATION} 
               counter={counter} 
               setCounter={setCounter}
               isBreak={isBreak} 
               setIsBreak={setIsBreak}  
              />
            </div>
          }
          {isLast && (
            <div className='task doing'>
              <h1>Task : {name}</h1>
              <Timer
               START_MINUTES={15} 
               START_SECOND={configuration.START_SECOND} 
               START_DURATION={configuration.START_DURATION} 
               counter={counter} 
               setCounter={setCounter} 
               isBreak={isBreak} 
               setIsBreak={setIsBreak} 
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Task;
