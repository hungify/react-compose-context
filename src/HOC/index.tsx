import { useState } from "react";

type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
function HigherOrderComponent<T>(Component: React.ComponentType<T & Props>, countStep: number) {
  function HOC(props: T) {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + countStep);
    };

    const decrement = () => {
      setCount(count - countStep);
    };
    return (
      <Component {...(props as T)} count={count} increment={increment} decrement={decrement} />
    );
  }
  return HOC;
}

export default HigherOrderComponent;
