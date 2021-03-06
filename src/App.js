import React from 'react';
import './App.scss';
import Keyboard from './arts/Keyboard/Keyboard';
import Quico from './arts/Quico/Quico';
import Eyes from './arts/Eyes/Eyes';

function App() {
  return (
    <div className="App">
      <Eyes />
      <Keyboard />
      <Quico />
    </div>
  );
}

export default App;
