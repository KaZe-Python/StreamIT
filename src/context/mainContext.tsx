import React, { createContext, useState } from 'react';

export const MainContext = createContext<any>(null);

const MainContextProvider: React.FC<IChildrenProps> = props => {
  const [test, setTest] = useState<[]>();
  return (
    <MainContext.Provider value={{test}}>
      {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider;