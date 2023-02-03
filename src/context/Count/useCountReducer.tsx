import { useCallback, useReducer } from 'react';
import { CountTypes } from '~/constants';
import type { CountActionTypes } from '~/context/Count/countActions';
import type { CountState } from '~/context/Count/CountProvider';

export type Dispatch = (action: CountActionTypes) => void;

type ActionThunk = (dispatch: Dispatch) => void;

const fakeApi = (amount: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount);
    }, 2000);
  });
};

export function useCountReducer(initialState: CountState) {
  const [state, dispatch] = useReducer((state: CountState, action: CountActionTypes) => {
    const { count } = state;

    switch (action.type) {
      case CountTypes.pending:
        return {
          ...state,
          loading: true,
        };
      case CountTypes.fulfilled:
        return {
          ...state,
          count: count + (action?.payload ?? 0),
          loading: false,
        };
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
    (amount: number) => async (dispatch: Dispatch) => {
      dispatch({
        type: CountTypes.pending,
      });

      const value = await fakeApi(amount);

      dispatch({
        type: CountTypes.fulfilled,
        payload: value,
      });
    },
    [],
  );

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
