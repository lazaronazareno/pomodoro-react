import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../context/tasklistContext';
import arrow from '../../utils/icon/arrow.png'
import './styles.scss'

const History = () => {
  const { taskList, setTaskList } = useContext(TaskContext)

  const list = JSON.parse(localStorage.getItem('tasklist'))
  const [newList, setNewList] = useState(list ? list : [])
  const [date, setDate] = useState('')
  const newDate = new Date();
  const currentDate = newDate.getFullYear()+'/'+(newDate.getMonth()+1)+'/'+newDate.getDate()
  const filterList = taskList.filter(e => !e.includes('Break'))
  const obj = {date: currentDate, taskList: filterList}
  
  const handleBack = () => {
    setTaskList([])
  }
  
  useEffect(() => {
    setDate(currentDate)
    if(taskList && taskList.length > 0) {
      localStorage.setItem('tasklist', JSON.stringify(newList))
    }
  },[newList])

  useEffect(() => {
    setNewList([...newList, obj])
  },[])


  return (
    <div className='history-container'>
      <div className='history-title__container'>
        <span className='history-title'>History</span>
        <Link onClick={handleBack} to='/'>
          <img src={arrow} alt="Arrow icons created by Kirill Kazachek - Flaticon" />
        </Link>
      </div>
      <div className="table">
        {newList && newList.length > 0 && (
          <div className='table-item'>
            {newList.map(tasks => (
              <div className='table-item-titles' key={tasks}>
                {tasks.taskList.map(task => (
                  <React.Fragment key={task}>
                    <span>{date}</span>
                    <span>{task}</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        )}
        {(!newList || newList.length === 0) && (
          <>No hay Puntuaciones</>
        )}
      </div>
    </div>
  )
}

export default History;