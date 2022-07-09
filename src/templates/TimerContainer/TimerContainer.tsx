import React, { FC } from 'react';
import styles from './TimerContainer.module.scss';

interface TimerContainerProps {}

export const TimerContainer: FC<TimerContainerProps> = () => (
  <div className={styles.TimerContainer}>
    TimerContainer Component
  </div>
);

