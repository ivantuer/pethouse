import { createContext, Dispatch } from 'react'
import { IMainContextState } from 'typescript/interface/mainContext'
import MAIN_CONTEXT_ACTION_TYPES, { MainContextActionTypesValues } from './actionTypes'

const initialState: IMainContextState = {
  lang: 'ua',
}

const reducer = (state: any, action: any) => {
  const { type } = action

  switch (type) {
    case MAIN_CONTEXT_ACTION_TYPES.SET_LANG: {
      return {
        ...state,
        lang: action.payload,
      }
    }
    case MAIN_CONTEXT_ACTION_TYPES.RESET_STATE: {
      return initialState
    }

    default: {
      return state
    }
  }
}

const MainContext = createContext<{
  state: IMainContextState
  dispatch: Dispatch<{ type: MainContextActionTypesValues; payload: any }>
}>({
  state: initialState,
  dispatch: () => {},
})

export { MainContext, initialState, reducer }
