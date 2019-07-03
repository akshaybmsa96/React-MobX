import React from 'react';
import './App.css';
import Parent from './Parent'
import {decorate, observable} from "mobx"
import {observer} from "mobx-react"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div><h1>Hello MobX</h1></div>
      <Parent/>
      </header>
    </div>
  );
}

export default App;
