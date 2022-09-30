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
  const list = JSON.parse(localStorage.getItem('tasklist'))
  const [newList, setNewList] = useState(list ? list :[])


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

  useEffect(() => {
    const newDate = new Date();
    const currentDate = newDate.getFullYear()+'/'+(newDate.getMonth()+1)+'/'+newDate.getDate()
    const filterList = taskList.filter(e => !e.includes('Break'))
    const obj = {date: currentDate, taskList: filterList}
    if (list){
      setNewList([...list, obj])
      localStorage.setItem('tasklist', JSON.stringify(newList))
    }
  }, [isLast])

  return (
    <div className="App">
      {taskList && (
        <>
          {taskList.length > 0 &&
            <div className='tasks-container'>
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
                <button className='menu-button' onClick={handleNextTask}>Next</button>
              )}
            </div>
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
