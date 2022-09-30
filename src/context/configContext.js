import React, { useState, createContext, useMemo } from 'react'

//create context
export const ConfigContext = createContext(undefined);

export const ConfigProvider = ({children}) => {
    const [configuration, setConfiguration] = useState({
      START_MINUTES : '25',
      START_SECOND : '0',
      LAST_MINUTES : '15',
      BREAK_MINUTES : '5',
      START_DURATION : 10
    });

    const value = useMemo(() => ({ configuration, setConfiguration }), [configuration])

    return (
        <ConfigContext.Provider value={value}>
          {children}
        </ConfigContext.Provider>
    )
}
