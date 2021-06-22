import React, { Children, createContext, useReducer } from "react";
import App from "../App.js";
import CouterReducer from "../reducer/CouterReducer.js";

const initialState = { count: 0 };

export const GlobalContext = createContext(initialState);

function GlobalProvider(props) {
  const [state, dispatch] = useReducer(CouterReducer, initialState);

  console.log("Store: ", state.count);

  const Decrement = (count) => {
    dispatch({ type: "DECREMENT", payload: count });
  };

  const Increment = (count) => {
    dispatch({ type: "INCREMENT", payload: count });
  };

  return (
    <GlobalContext.Provider
      value={{ count: state.count, Decrement, Increment }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
