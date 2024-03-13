import { useEffect ,createContext, useReducer } from "react";

export const AuthContext = createContext<any>(null)

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {user: action.payload}
    case 'LOGOUT':
      return {user: null}
    default:
      return state
  }
}


export const AuthContextProvider = ({children}:{children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    if (user) {
      dispatch({type:'LOGIN', payload: user})
    }

  },[])

  console.log('Authcontext state: ', state)

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )

}
