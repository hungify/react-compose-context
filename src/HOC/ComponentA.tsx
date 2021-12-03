import HigherOrderComponent from ".";

type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

function ComponentA({ count, increment, decrement }: Props) {
  return (
    <div className="wrapper">
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement by 5</button>
      <button onClick={increment}>Increment by 5</button>
    </div>
  );
}

export default HigherOrderComponent(ComponentA, 5);
