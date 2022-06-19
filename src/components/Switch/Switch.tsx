import React from 'react';
import useTheme from '~context/Theme';

export default function Switch() {
  const { setTheme, state } = useTheme();
  const { theme } = state;

  const handleSwitch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setTheme(theme);
  };

  return (
    <button className='theme__toggler' onClick={handleSwitch}>
      {theme === 'light' ? '🌞' : '🔅'}
    </button>
  );
}
