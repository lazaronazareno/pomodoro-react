import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from './components/task';
import { ConfigContext } from './context/configContext';
import { TaskContext } from './context/tasklistContext';
import sound1 from './utils/sound/sound1.wav'
import './App.scss';

const Pomodoro = () => {
  const {taskList} = useContext(TaskContext)
  const {configuration} = useContext(ConfigContext)
  const [counter, setCounter] = useState(0)
  const [isBreak, setIsBreak] = useState(false)
  const [isLast, setIsLast] = useState(false)


  const handleNextTask = () => {
    if(taskList.length > counter +1) {
      setCounter(counter + 1)
      setIsBreak(!isBreak)
    }
  }

  useEffect(() => {
    if(taskList.length > 0){
      const audio = new Audio(sound1)
      audio.play()

    }
    if(taskList.length < counter +1 && taskList.length > 1){
      setIsLast(true)
    }
  }, [counter, taskList])

  return (
    <div className="App">
      {taskList && (
        <>
          {taskList.length > 0 &&
            <>
              <div className='tasks'>
                {taskList.map(task => (
                  <Task name={task}
                  key={task}
                  configuration={configuration} 
                  taskList={taskList} 
                  counter={counter}
                  setCounter={setCounter} 
                  isBreak={isBreak}
                  setIsBreak={setIsBreak} 
                  isLast={isLast}
                  />
                ))}
              </div>
              {taskList.length > counter +1 && taskList.length > 1 && (
                <button onClick={handleNextTask}>Next</button>
              )}
            </>
          }
          {isLast && (
            <div>
              <h1>Pomodoro Over!</h1>
              <Link to='/history'>go to history</Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Pomodoro;
