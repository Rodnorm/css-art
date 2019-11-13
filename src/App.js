import React from 'react';
import './App.scss';
import AmeLogo from './arts/ame-logo/AmeLogo';
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Keyboard from './arts/Keyboard/Keyboard';

function App() {
  return (
    <div className="App">
      <AmeLogo />
      <Keyboard />
    </div>
  );
}

export default App;
