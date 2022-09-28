import { useEffect, useState } from 'react';
import './App.scss';
import ConfigForm from './components/form-config';
import FormTask from './components/form-task';
import History from './components/history';
import Task from './components/task';
import sound1 from './utils/sound/sound1.wav'

const DEFAULT_CONFIGURATION = {
  START_MINUTES : '25',
  START_SECOND : '00',
  LAST_MINUTES : '15',
  BREAK_MINUTES : '5',
  START_DURATION : 10
}

function App() {
  const [taskList, setTaskList] = useState([])
  const [filterList, setFilterList] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [counter, setCounter] = useState(0)
  const [isBreak, setIsBreak] = useState(false)
  const [isLast, setIsLast] = useState(false)
  const [configuration, setConfiguration] = useState(DEFAULT_CONFIGURATION)

  const handleForm = () => {
    setShowForm(!showForm)
  }

  const handleSettings = () => {
    setShowSettings(!showSettings)
  }

  const handleNextTask = () => {
    if(taskList.length > counter +1) {
      setCounter(counter + 1)
      setIsBreak(!isBreak)
    }
  }

  const handleIsLast = () => {
    setIsLast(!isLast)
    setTaskList()
  }

  useEffect(() => {
    if(taskList.length > 0){
      const audio = new Audio(sound1)
      audio.play()
      const newList = taskList.filter(e => !e.includes('Break'))
      setFilterList(newList)
    }
    if(taskList.length < counter +1 && taskList.length > 1){
      setIsLast(true)
    }
  }, [counter, taskList])

  return (
    <div className="App">
      {taskList && (
        <>
          {taskList.length < 7 &&
            <>
              {!isLast && !showForm && !showSettings ? <button onClick={handleIsLast}>Show History</button> : <button onClick={handleIsLast}>Hide History</button>}
              { !showForm && !showSettings && !isLast &&
                  <button onClick={handleForm}>New Task</button>
              }
              {!showForm && !showSettings && taskList.length === 0 &&
                <button onClick={handleSettings}>Settings</button>
              }
              {showForm &&
                <div className='form-modal'>
                  <FormTask setTaskList={setTaskList} taskList={taskList} counter={counter} showForm={showForm} setShowForm={setShowForm} />
                </div>
              }
              {showSettings && 
                <div className='form-modal'>
                  <ConfigForm setConfiguration={setConfiguration} showSettings={showSettings} setShowSettings={setShowSettings} />
                  <button onClick={handleSettings}>X</button>
                </div>
              }
            </>
          }
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
            <History taskList={filterList} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
