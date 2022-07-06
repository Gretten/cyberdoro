import React from 'react';
import './App.css';
import { FrontButton } from './components';

export const App = () => {

  const handler = () => console.log('hello');
  
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
        <FrontButton 
          big
          settedOn
          text='pomodoro'
          frontButtonHandler={handler}
        />
      </header>
    </div>
  );
}
