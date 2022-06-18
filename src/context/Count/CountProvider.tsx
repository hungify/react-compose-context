import { createContext } from 'react';
import { useCountReducer } from '~context/Count/useCountReducer';

export interface CountState {
  num: number;
}
type CountContext = ReturnType<typeof useCountReducer>;

const initialValue: CountState = {
  num: 0,
};

export const CountContext = createContext<CountContext>({
  state: initialValue,
  increase: () => undefined,
  decrease: () => undefined,
  setCount: () => undefined,
});
CountProvider.displayName = 'CountProvider';

interface CountProviderProps {
  initialState?: CountState;
  children: React.ReactNode;
}
function CountProvider({ initialState, children }: CountProviderProps) {
  return (
    <CountContext.Provider value={useCountReducer(initialState || initialValue)}>
      {children}
    </CountContext.Provider>
  );
}

export default CountProvider;
