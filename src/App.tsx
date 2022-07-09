import React from 'react';
import './App.css';
import { AppBackground } from './templates';
import { RadioButton } from './components';

const buttons = [
    {
        id: '1',
        name: 'timers',
        text: 'pomodoro',
        value: 'pomodoro',
    },
    {
        id: '3',
        name: 'timers',
        text: 'short break',
        value: 'shortBreak',
    },
    {
        id: '4',
        name: 'timers',
        text: 'long break',
        value: 'longBreak',
    }
]

export const App = () => {

  const buttonsToRender = buttons.map(button => {

      const { id, text, value, name} = button;
      return (
          <span style={{ margin: '0px 10px'}}>
              <RadioButton id={id} name={name} text={text} value={value} key={id} />
          </span>
      )
  })

  return (
    <div className="">
      <AppBackground
        backgroundImage=''
      />
      <div style={{ marginTop: '300px', display: 'flex', justifyContent: 'center'}}>
          {
              buttonsToRender
          }
      </div>
    </div>
  );
}
