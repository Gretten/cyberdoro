import React, { FC } from 'react';
import styles from './TimerControlButtons.module.scss';

interface TimerControlButtonsProps {}

export const TimerControlButtons: FC<TimerControlButtonsProps> = () => (
  <div className={styles.TimerControlButtons}>
    TimerControlButtons Component
  </div>
);
