import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from './components/task';
import { ConfigContext } from './context/configContext';
import { TaskContext } from './context/tasklistContext';
import sound1 from './utils/sound/sound1.wav'
import next from './utils/icon/next.png'
import trash from './utils/icon/trash-can.png'
import './App.scss';

const Pomodoro = () => {
  const {taskList, setTaskList} = useContext(TaskContext)
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

  const handleDelete = () => {
    setTaskList([])
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
    } else {
      setNewList([...newList, obj])
      localStorage.setItem('tasklist', JSON.stringify(newList))
    }
    console.log('useeffect is last',taskList)
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
                <div className='next' onClick={handleNextTask}>
                  <img src={next} alt="Next icons created by Freepik - Flaticon"/>
                </div>
              )}
              <img className='delete' onClick={handleDelete} src={trash} alt='Trash icons created by Freepik - Flaticon' />
            </div>
          }
          {isLast && (
            <div className='over'>
              <h1>Pomodoro Over!</h1>
              <Link className='menu-button' to='/history'>History</Link>
            </div>
          )}
        </>
      )}
      {taskList.length === 0 && (
        <div className='tasks-container'>
          <div className='tasks'>
            <Task name='test'
              configuration={configuration} 
              taskList={taskList} 
              counter={counter}
              setCounter={setCounter} 
              isBreak={isBreak}
              setIsBreak={setIsBreak} 
              isLast={isLast}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Pomodoro;
