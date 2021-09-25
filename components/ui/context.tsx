import { createContext, FC, ReactNode, useContext, useState } from 'react';

export interface StateModifier {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

type State = StateValues & StateModifier;

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};
const initialState = {
  isSidebarOpen: false,
};

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

export const UIProvider: FC<ReactNode> = ({ children }) => {
  const openSidebar = () => {};
  const closeSidebar = () => {};

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: false,
  };

  return (
    <>
      <UIContext.Provider value={value}>{children}</UIContext.Provider>
    </>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
