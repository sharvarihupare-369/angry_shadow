import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {

   let [statusgen,setStatusgen] = useState(false)
   const [paramVal,setParamVal] = useState('')

    return <GlobalContext.Provider value={{statusgen,setStatusgen,paramVal,setParamVal}} >
        {children}
    </GlobalContext.Provider>
}

export default GlobalContextProvider