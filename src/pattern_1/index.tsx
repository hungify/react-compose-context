import { useCallback } from "react";
import { DecrementId, SetChangeValue } from "./actions/count";
import Counter1 from "./components/Counter";
import { useCount } from "./context/count";

function App1() {
  const {
    state: { id, changeValue },
    dispatch,
  } = useCount();

  const handleDecrement = useCallback(() => dispatch(DecrementId()), [dispatch]);
  const changeValueEvent = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch(SetChangeValue(Number(event.currentTarget.value))),
    [dispatch]
  );
  return (
    <div>
      <select id="change-select" value={changeValue} onChange={changeValueEvent}>
        {[1, 2, 3, 4, 5].map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      <h1>{id}</h1>
      <Counter1 />
      <button onClick={handleDecrement}>Decrement count parent</button>
    </div>
  );
}
export default App1;
