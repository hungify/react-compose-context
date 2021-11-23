import React, { createContext } from "react";
import { countReducer } from "../reducers/count";

export type CountAction = { type: "increment" } | { type: "decrement" };

type Dispatch = (action: CountAction) => void;

export interface CountState {
  count: number;
}

const CountContext = createContext<{ state: CountState; dispatch: Dispatch } | undefined>(
  undefined
);

type CountProviderProps = { children: React.ReactNode };

function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  const value = { state, dispatch };
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}

function useCount() {
  const context = React.useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CountProvider, useCount };
