import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/tasklistContext';
import './styles.scss'

const History = () => {
  const { setTaskList } = useContext(TaskContext)
  const [newList, setNewList] = useState([])
  
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('tasklist'))
    if (list) {
      setNewList(list)
    }
    return () => {
      setTaskList([])
    }
  },[])

  return (
    <div className='history-container'>
      <div className="table">
        <h1>History</h1>
        {newList && newList.length > 0 && (
          <div className='table-item'>
            {newList.map(task => (
              <div className='table-item-titles' key={`${task}-${Date}`}>
                <span>{task.date}</span>
                <ul>
                  {task.taskList.map(item => (
                    <li key={`${item}-${Date}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {(!newList || newList.length === 0) && (
          <span>No History</span>
        )}
      </div>
    </div>
  )
}

export default History;