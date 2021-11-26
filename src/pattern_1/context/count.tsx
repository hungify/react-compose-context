import React, { createContext, useContext, useReducer } from "react";
import { ActionType, CountAction } from "../actions/count";

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
  increment: () => void;
  decrement: () => void;
  setValueChange: (count: number) => void;
}

export const CountContext = createContext<ICountContext>({
  state: initialState,
  increment: () => {},
  decrement: () => {},
  setValueChange: (count: number) => {},
});

type CountProviderProps = { children: React.ReactNode };

function CountProvider1({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const _handleIncrement = () => {
    dispatch({
      type: ActionType.IncrementId,
    });
  };

  const _handleDecrement = () => {
    dispatch({
      type: ActionType.DecrementId,
    });
  };

  const _setValueChange = (value: number) => {
    dispatch({
      type: ActionType.SetChangeValue,
      payload: value,
    });
  };
  return (
    <CountContext.Provider
      value={{
        state,
        increment: _handleIncrement,
        decrement: _handleDecrement,
        setValueChange: _setValueChange,
      }}
    >
      {children}
    </CountContext.Provider>
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
