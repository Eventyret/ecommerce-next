import { createContext, FC, ReactNode, useContext, useState } from 'react';

const UIContext = createContext<{ [key: string]: any }>({
  uiState: 'defaultState',
});

export const UIProvider: FC<ReactNode> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const uiState = {
    isSidebarOpen,
    setIsSidebarOpen,
  };
  return (
    <>
      <UIContext.Provider value={{ uiState: uiState }}>
        {children}
      </UIContext.Provider>
    </>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
