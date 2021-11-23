import { useCallback } from "react";
import { IncrementId } from "../actions/count";
import { useCount } from "../context/count";

function Counter1() {
  const { state, dispatch } = useCount();

  const handleIncrement = useCallback(() => dispatch(IncrementId()), [dispatch]);

  return (
    <div>
      <h2>{state.id}</h2>
      <button onClick={handleIncrement}>Increment count child</button>
    </div>
  );
}

export default Counter1;
