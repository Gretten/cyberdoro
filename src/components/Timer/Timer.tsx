import React, { FC } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {}

export const Timer: FC<TimerProps> = () => (
  <div className={styles.Timer}>
    Timer Component
  </div>
);
