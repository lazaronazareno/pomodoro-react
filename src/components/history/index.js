import React, { Fragment, useEffect, useState } from 'react';
import './styles.scss'

const History = ({taskList}) => {
  const list = JSON.parse(localStorage.getItem('tasklist'))
  const [newList, setNewList] = useState(list ? list : [])
  const [date, setDate] = useState('')
  const newDate = new Date();
  const currentDate = newDate.getFullYear()+'/'+(newDate.getMonth()+1)+'/'+newDate.getDate()
  const obj = {date: currentDate, taskList: taskList}
  
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
{/*         <Link to='/'>
          <img src={arrow} alt="Arrow icons created by Kirill Kazachek - Flaticon" />
        </Link> */}
      </div>
        <table className="table">
          <thead className='table-head'>
            <tr className='table-titles'>
              <th>Date</th>
              <th>Task/s</th>
            </tr>
          </thead>
          {newList && newList.length > 0 && (
            <tbody className='table-item'>
              {newList.map(tasks => (
                  <tr className='table-item-titles' key={tasks}>
                    {tasks.taskList.map(task => (
                      <Fragment key={task}>
                        <td>{date}</td>
                        <td>{task}</td>
                      </Fragment>
                    ))}
                  </tr>
              ))}
            </tbody>
          )}
          {(!newList || newList.length === 0) && (
            <>No hay Puntuaciones</>
          )}
        </table>
    </div>
  )
}

export default History;