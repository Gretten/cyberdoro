import React from 'react';
import './App.css';
import { TimerStartButton } from './components/TimerStartButton';

export const App = () => {

  const handleTimer = () => {
    console.log('hello')
  }

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
        <TimerStartButton
            text="text"
            handleTimer={handleTimer}
        />
      </header>
    </div>
  );
}
