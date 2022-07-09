import React, { FC } from 'react';
import styles from './Timer.module.scss';
import { TimerProps } from './types';

export const Timer: FC<TimerProps> = ({ timer }) => (
  <div>
    <span className={styles.timer}>
        {timer}
    </span>
  </div>
);
