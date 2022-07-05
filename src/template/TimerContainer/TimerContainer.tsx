import React, { FC } from 'react';
import styles from './TimerContainer.module.scss';

interface TimerContainerProps {}

const TimerContainer: FC<TimerContainerProps> = () => (
  <div className={styles.TimerContainer}>
    TimerContainer Component
  </div>
);

export default TimerContainer;
