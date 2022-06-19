import './App.css';

import Counter from '~components/Counter';
import useTheme from '~context/Theme';
import logo from './logo.svg';
import Switch from '~components/Switch';

function App() {
  const { state } = useTheme();
  const { theme } = state;

  return (
    <div className='App' data-theme={theme}>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <Switch />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
