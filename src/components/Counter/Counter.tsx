import { useState } from 'react';
import useCount from '~context/Count';
import styles from './Counter.module.css';

function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  const { state, decrease, increase, increaseByAmount, increaseAsync, dispatch } = useCount();
  const { count } = state;

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Increment value' onClick={() => increase()}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label='Decrement value' onClick={() => decrease()}>
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => increaseByAmount(Number(incrementAmount) || 0)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(increaseAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

export default Counter;
