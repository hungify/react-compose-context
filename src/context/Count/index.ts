export { default as CountProvider } from './CountProvider';
import { useContext } from 'react';
import { CountContext } from '~context/Count/CountProvider';

function useCount() {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export default useCount;
