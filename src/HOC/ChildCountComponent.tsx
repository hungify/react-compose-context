import ParentCountComponent from '~/HOC/ParentCountComponent';

interface ChildCountProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

function ChildCountComponent({ count, increment, decrement }: ChildCountProps) {
  return (
    <div className='wrapper'>
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement by 5</button>
      <button onClick={increment}>Increment by 5</button>
    </div>
  );
}

export default ParentCountComponent(ChildCountComponent, 5);
