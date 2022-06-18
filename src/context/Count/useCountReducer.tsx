import { useCallback, useReducer } from 'react';
import { CountTypes } from '~constants/Count';
import { CountActionTypes } from '~context/Count/countActions';
import { CountState } from '~context/Count/CountProvider';

export function useCountReducer(initialState: CountState) {
  const [state, dispatch] = useReducer((state: CountState, action: CountActionTypes) => {
    const { num } = state;
    switch (action.type) {
      case CountTypes.decrease:
        return {
          ...state,
          num: num - 1,
        };
      case CountTypes.increase:
        return {
          ...state,
          num: num + 1,
        };
      case CountTypes.setCount:
        return {
          ...state,
          num: action.payload,
        };
      default:
        return state;
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

  const _handleSetCount = useCallback((value: number) => {
    dispatch({
      type: CountTypes.setCount,
      payload: value,
    });
  }, []);
  return {
    state,
    increase: _handleIncrement,
    decrease: _handleDecrement,
    setCount: _handleSetCount,
  };
}

export default useCountReducer;
