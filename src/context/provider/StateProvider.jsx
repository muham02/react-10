import React from 'react'
import { useReducer } from 'react'
import { AppContext } from '../store'
import reducer,{initialState }from '../reduser/reduser'
const StateProvider = ({children}) => {
    console.log({children});
  return (
    <div>
        <AppContext.Provider value={useReducer(reducer,initialState)}>
{children}
        </AppContext.Provider>
    </div>
  )
}

export default StateProvider