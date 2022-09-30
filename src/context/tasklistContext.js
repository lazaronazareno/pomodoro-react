import React, { useState, createContext, useMemo } from 'react'

//create context
export const TaskContext = createContext(undefined);

export const TaskListProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]);

    const value = useMemo(() => ({ taskList, setTaskList }), [taskList])

    return (
        <TaskContext.Provider value={value}>
          {children}
        </TaskContext.Provider>
    )
}
