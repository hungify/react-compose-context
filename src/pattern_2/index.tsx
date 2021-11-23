import Counter2 from "./components/Counter";
import { useCount } from "./context/count";

function App2() {
  const {
    state: { changeValue, count },
    dispatch,
  } = useCount();

  return (
    <div>
      <select
        id="change-select"
        value={changeValue}
        onChange={(e) => {
          dispatch({
            type: "value/change/set",
            payload: Number(e.target.value),
          });
        }}
      >
        {[1, 2, 3, 4, 5].map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      <h1>{count}</h1>
      <Counter2 />
      <button onClick={() => dispatch({ type: "counter/decrement" })}>
        Decrement count parent
      </button>
    </div>
  );
}
export default App2;
