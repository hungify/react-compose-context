import { useCallback, useReducer } from 'react';
import { CountTypes } from '~/constants';
import type { CountActionTypes } from '~/context/Count/countActions';
import type { CountState } from '~/context/Count/CountProvider';

export type Dispatch = (action: CountActionTypes) => void;

export function useCountReducer(initialState: CountState) {
  const [state, dispatch] = useReducer((state: CountState, action: CountActionTypes) => {
    const { count } = state;

    switch (action.type) {
      case CountTypes.decrease:
        return {
          ...state,
          count: count - (action?.payload ?? 1),
        };
      case CountTypes.increase:
        return {
          ...state,
          count: count + (action?.payload ?? 1),
        };
      case CountTypes.increaseAmount:
        return {
          ...state,
          count: (action.payload ?? 0) + count,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }, initialState);

  const _handleIncrement = useCallback(() => {
    dispatch({
      type: CountTypes.increase,
    });
  }, []);

  const _handleDecrement = useCallback(() => {
    dispatch({
      type: CountTypes.decrease,
    });
  }, []);

  const _handleIncrementByAmount = useCallback((amount: number) => {
    dispatch({
      type: CountTypes.increaseAmount,
      payload: amount,
    });
  }, []);

  const _handleIncrementAsync = useCallback(
    (amount: number) => (dispatch: Dispatch) => {
      dispatch({
        type: CountTypes.decrease,
        payload: 10,
      });
      setTimeout(() => {
        dispatch({ type: CountTypes.increaseAmount, payload: amount });
      }, 2000);
      dispatch({
        type: CountTypes.increaseAmount,
        payload: 5,
      });
    },
    [],
  );

  type ActionThunk = (dispatch: Dispatch) => void;
  const _thunkDispatch = useCallback(
    (action: ActionThunk) => (typeof action === 'function' ? action(dispatch) : action),
    [],
  );

  return {
    state,
    increase: _handleIncrement,
    decrease: _handleDecrement,
    increaseByAmount: _handleIncrementByAmount,
    increaseAsync: _handleIncrementAsync,
    dispatch: _thunkDispatch,
  };
}

export default useCountReducer;
