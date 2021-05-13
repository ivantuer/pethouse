const MAIN_CONTEXT_ACTION_TYPES = {
  SET_LANG: 'SET_LANG',
  RESET_STATE: 'RESET_STATE',
}

export type MainContextActionTypesKeys = keyof typeof MAIN_CONTEXT_ACTION_TYPES
export type MainContextActionTypesValues = typeof MAIN_CONTEXT_ACTION_TYPES[MainContextActionTypesKeys]

export default MAIN_CONTEXT_ACTION_TYPES
