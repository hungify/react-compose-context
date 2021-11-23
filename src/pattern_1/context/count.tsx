import React, { createContext, useContext, useReducer } from "react";
import { CountAction } from "../actions/count";

import { countReducer } from "../reducers/count";

export interface ICountState {
  id: number;
  changeValue: number;
}

const initialState: ICountState = {
  id: 1,
  changeValue: 1,
};

interface ICountContext {
  state: ICountState;
  dispatch: React.Dispatch<CountAction>;
}

export const CountContext = createContext<ICountContext>({
  state: initialState,
  dispatch: () => null,
});

type CountProviderProps = { children: React.ReactNode };

function CountProvider1({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>{children}</CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CountProvider1, useCount };
