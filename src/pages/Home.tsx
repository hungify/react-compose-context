import { useNavigate } from 'react-router-dom';
import logo from '~/assets/react.svg';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={logo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + Typescript + Starter</h1>
      <div className='card'>
        <button onClick={() => navigate('counter')}>Go to counter</button>
        <button onClick={() => navigate('switch')}>Go to Switch</button>
        <button onClick={() => navigate('list-string')}>Go To List String</button>
        <button onClick={() => navigate('list-number')}>Go To List Number</button>
        <button onClick={() => navigate('store')}>Go To Store</button>
        <button onClick={() => navigate('form')}>Go To Form</button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
