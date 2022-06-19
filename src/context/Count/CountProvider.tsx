import { createContext } from 'react';
import { useCountReducer } from '~context/Count/useCountReducer';

export interface CountState {
  count: number;
}

type CountContext = ReturnType<typeof useCountReducer>;

const initialValue: CountState = {
  count: 0,
};

export const CountContext = createContext<CountContext>({
  state: initialValue,
  increase: () => undefined,
  decrease: () => undefined,
  increaseByAmount: () => undefined,
  increaseAsync: () => () => undefined,
  dispatch: () => undefined,
});
CountContext.displayName = 'CountProvider';

interface CountProviderProps {
  children: React.ReactNode;
}
function CountProvider({ children }: CountProviderProps) {
  return (
    <CountContext.Provider value={useCountReducer(initialValue)}>{children}</CountContext.Provider>
  );
}

export default CountProvider;
