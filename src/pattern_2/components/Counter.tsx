import { useCount } from "../context/count";

function Counter2() {
  const { state, dispatch } = useCount();

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "counter/increment" })}>Increment count child</button>
    </div>
  );
}

export default Counter2;
