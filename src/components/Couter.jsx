import React, { useContext, useReducer } from "react";

import { GlobalContext } from "../context/GlobalState.js";

function Couter(props) {
  const { count, Decrement } = useContext(GlobalContext);
  console.log(count);
  const handleOnClick = () => {
    Decrement(count);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleOnClick}>Child Dec</button>
    </div>
  );
}

export default Couter;
