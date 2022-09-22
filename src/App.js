import { useState } from 'react';
import './App.css';
import FormTask from './components/form-task';
import Task from './components/task';

const DEFAULT_CONFIGURATION = {
  START_MINUTES : '25',
  START_SECOND : '00',
  START_DURATION : 10
}

function App() {
  const [taskList, setTaskList] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [counter, setCounter] = useState(0)

  const onClick = () => {
    setShowForm(!showForm)
  }

  const handleNextTask = () => {
    if(taskList.length > counter +1) {
      setCounter(counter + 1)
    }
  }


  return (
    <div className="App">
      {taskList.length <= 7 &&
        <>
          <button onClick={onClick}>New Task</button>
          {showForm &&
            <FormTask setTaskList={setTaskList} taskList={taskList} />
          }
        </>
      }
      {taskList.length > 0 &&
        <>
          <div className='tasks'>
            {taskList.map(task => (
              <>
                <Task name={task} configuration={DEFAULT_CONFIGURATION}/>
              </>
            ))}
          </div>
          {taskList.length > counter +1 && taskList.length > 1 && (
            <button onClick={handleNextTask}>Next</button>
          )}
        </>
      }
    </div>
  );
}

export default App;
