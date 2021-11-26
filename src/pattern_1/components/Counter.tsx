import { useCount } from "../context/count";

function Counter1() {
  const {
    state: { id },
    increment,
  } = useCount();

  const handleIncrement = () => {
    increment();
  };

  return (
    <div>
      <h2>{id}</h2>
      <button onClick={handleIncrement}>Increment count child</button>
    </div>
  );
}

export default Counter1;
