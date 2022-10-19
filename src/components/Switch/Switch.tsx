import React from 'react';
import { useStore } from '~/app';
import { Themes } from '~/constants';

export default function Switch() {
  const [theme, setTheme] = useStore((store) => store.theme);

  const handleSwitch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setTheme({
      theme: theme === Themes.dark ? Themes.light : Themes.dark,
    });
    window.localStorage.setItem('theme', theme);
  };

  return (
    <button className='theme__toggler' onClick={handleSwitch}>
      {theme === 'light' ? '🌞' : '🔅'}
    </button>
  );
}
