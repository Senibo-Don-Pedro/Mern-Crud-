import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext<any>(null)

export const workoutsReducer = (state:any , action: any ) => {
  switch (action.type) {
    case 'SET_WORKOUTS': 
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts]
      }
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((w:any) => w._id !== action.payload._id)
      }
    default:       
      return state
  }
}

export const WorkoutsContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })

  return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
      { children }
    </WorkoutsContext.Provider>
  )
  
}
