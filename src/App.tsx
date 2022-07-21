import './App.css';

import { Route, Routes } from 'react-router-dom';
import Counter from '~components/Counter';
import Switch from '~components/Switch';
import useTheme from '~context/Theme';
import ListString from '~HOC/components/ListString';
import logo from './logo.svg';
import ListNumber from '~HOC/components/ListNumber';
import Home from '~pages/Home';

function App() {
  const { state } = useTheme();
  const { theme } = state;

  return (
    <div className='App' data-theme={theme}>
      <img src={logo} className='App-logo' alt='logo' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='counter' element={<Counter />} />
        <Route path='switch' element={<Switch />} />
        <Route path='list-string' element={<ListString data={['a', 'b']} />} />
        <Route path='list-number' element={<ListNumber data={[1, 2]} />} />
        <Route
          path='*'
          element={
            <div>
              <h1>404</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
