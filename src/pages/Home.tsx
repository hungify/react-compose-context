import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => navigate('counter')}>Go to counter</button>
        <button onClick={() => navigate('switch')}>Go to Switch</button>
        <button onClick={() => navigate('list-string')}>Go To List String</button>
        <button onClick={() => navigate('list-number')}>Go To List Number</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
