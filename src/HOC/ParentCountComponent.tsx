import { useState } from 'react';

interface ParentCountProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

function ParentCountComponent<T>(
  Component: React.ComponentType<T & ParentCountProps>,
  countStep: number,
) {
  return function Count(props: T) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + countStep);
    };
    const decrement = () => {
      setCount(count - countStep);
    };

    return <Component {...props} count={count} increment={increment} decrement={decrement} />;
  };
}

export default ParentCountComponent;
