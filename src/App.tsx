import React, { useState } from 'react';
import './style.sass';
import { Sections, SectionsCollapsible } from './Comopnents/Sections';
import Wishes from './Comopnents/Wishes';

const App: React.FC = () => {
  const [active, setActive] = useState('');

  function handleClick(name: string) {
    setActive(name);
  };

  return (
    <div className="App">
      <header>
        <h1 className='greet'>Привет!</h1>
        <h2>Это мой список желаний. Если затрудняешься с выбором подарка
          для меня, он должен помочь 😊
        </h2>
      </header>
      <div className="body">
        <aside>
          <Sections onClick={handleClick} />
          <SectionsCollapsible onClick={handleClick} />
        </aside>
        <div className="rings"></div>
        <Wishes section={active} />
      </div>
    </div>
  );
}

export default App;
