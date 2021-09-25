import { createContext, FC, ReactNode } from 'react';

const UIContext = createContext<{ [key: string]: string }>({
  uiState: 'defaultState',
});

export const UIProvider: FC<ReactNode> = ({ children }) => {
  return (
    <>
      <UIContext.Provider value={{ uiState: 'Something for now' }}>
        {children}
      </UIContext.Provider>
    </>
  );
};
