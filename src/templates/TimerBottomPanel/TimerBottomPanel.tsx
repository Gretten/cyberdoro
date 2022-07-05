import React, { FC } from 'react';
import styles from './TimerBottomPanel.module.scss';

interface TimerBottomPanelProps {}

export const TimerBottomPanel: FC<TimerBottomPanelProps> = () => (
  <div className={styles.TimerBottomPanel}>
    TimerBottomPanel Component
  </div>
);
