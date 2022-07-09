import React from 'react';
import './App.css';
import { RadioButton } from './components';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RadioButton
          id="1"
          name="animals"
          value='dog'
          text="pomodoro"
        />
        <RadioButton
          id="2"
          name="animals"
          value='cat'
          text="short break"
        />
      </header>
    </div>
  );
}
