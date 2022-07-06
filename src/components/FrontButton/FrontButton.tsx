import React, { FC } from 'react';
import styles from './FrontButton.module.scss';

interface FrontButtonProps {
  text: string;
  settedOn: boolean;
  big: boolean;
  frontButtonHandler: () => void;
}

export const FrontButton: FC<FrontButtonProps> = ({ text, settedOn, big, frontButtonHandler }) => (
  <>
    <input 
      type="radio" 
      id="frontButtonPomodoro" 
      className={styles.hiddenInput}
    />
    <label 
      htmlFor="frontButtonPomodoro"
      className={`${styles.button} ${settedOn ? styles.settedOn : styles.settedOff} ${big ? styles.big : ''}`}
      onClick={frontButtonHandler}
    >
      {text}
    </label>
  </>
);
