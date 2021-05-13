import React, { FC, useReducer } from 'react'
import { initialState, MainContext, reducer } from './mainContext'

const MainContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { Provider } = MainContext
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default MainContextProvider
