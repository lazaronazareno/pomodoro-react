import React, { useState, createContext, useMemo } from 'react'

//create context
export const TaskContext = createContext(undefined);

export const TaskListProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]);
    console.log(taskList)

    //put value inside useMemo so that the component only rerenders when there is change in the value
    const value = useMemo(() => ({ taskList, setTaskList }), [taskList])

    return (
        <TaskContext.Provider value={value}>
          {children}
        </TaskContext.Provider>
    )
}
