import { createContext, FC, ReactNode, useContext } from 'react';

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

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
