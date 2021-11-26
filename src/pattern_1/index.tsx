import Counter1 from "./components/Counter";
import { useCount } from "./context/count";

function App1() {
  const {
    state: { id, changeValue },
    decrement,
    setValueChange,
  } = useCount();

  const handleDecrement = () => {
    decrement();
  };
  const changeValueEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueChange(Number(event.currentTarget.value));
  };

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
