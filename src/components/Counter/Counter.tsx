import useCount from '~context/Count';

function Counter() {
  const { state, decrease } = useCount();
  const { num } = state;
  return (
    <div>
      <h1>Count is {num}</h1>
      <button onClick={() => decrease()}>Decrease</button>
    </div>
  );
}

export default Counter;
