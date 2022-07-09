import React, { FC } from 'react';
import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  id: string;
  name: string;
  text: string;
  value: string;
}

console.log(styles);


export const RadioButton: FC<RadioButtonProps> = ({ id, name, text, value }) => (
    <span>
      <input 
        type="radio" 
        name={name} 
        id={id} 
        value={value} 
        className={styles.radioInput}
      />
      <label 
        htmlFor={id} 
        className={styles.radioLabel}
      >
        {text}
      </label>
    </span>
);
