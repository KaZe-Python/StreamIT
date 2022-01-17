import React, {createContext, useState} from 'react';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: React.FC<IChildrenProps> = props => {
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
  }

  const signup = () => {
    setAuth(true);
  }

  const logout = () => {
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{auth, login, signup, logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;