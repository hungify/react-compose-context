import React, { createContext, useContext, useReducer } from "react";
import { countReducer } from "../reducers/count";

export type CountAction =
  | { type: "counter/increment" | "counter/decrement" }
  | { type: "value/change/set"; payload: number };

type Dispatch = (action: CountAction) => void;

export interface CountState {
  count: number;
  changeValue?: number;
}

const CountContext = createContext<{ state: CountState; dispatch: Dispatch } | undefined>(
  undefined
);

type CountProviderProps = { children: React.ReactNode };

function CountProvider2({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, { count: 0, changeValue: 1 });
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

export { CountProvider2, useCount };
