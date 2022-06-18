import './App.css';

import Counter from '~components/Counter';
import useCount from '~context/Count';
import ChildCountComponent from '~HOC/ChildCountComponent';
import logo from './logo.svg';

function App() {
  const { state, increase } = useCount();
  const { num } = state;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React! </p>
        <p>{num}</p>
        <button onClick={() => increase()}>Increase</button>
      </header>
      <Counter />
      <ChildCountComponent />
    </div>
  );
}

export default App;
