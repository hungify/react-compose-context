import { useCount } from "../context/count";

function CounterC() {
  const { state, dispatch } = useCount();

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment count child
      </button>
    </div>
  );
}

export default CounterC;
