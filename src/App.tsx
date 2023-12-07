import './App.css';

import { Route, Routes } from 'react-router-dom';
import Counter from '~/components/Counter';
import Switch from '~/components/Switch';
import ListString from '~/HOC/components/ListString';
import ListNumber from '~/HOC/components/ListNumber';
import Home from '~/pages/Home';
import ContentContainer from '~/components/Container';
import { Form } from './pages/Form';
import { useStore } from './store';

function App() {
  const [theme] = useStore((store) => store.theme);

  return (
    <div className='App' data-theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='counter' element={<Counter />} />
        <Route path='switch' element={<Switch />} />
        <Route path='store' element={<ContentContainer />} />
        <Route path='list-string' element={<ListString data={['a', 'b']} />} />
        <Route path='list-number' element={<ListNumber data={[1, 2]} />} />
        <Route path='form' element={<Form />} />
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
