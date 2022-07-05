import React, { FC } from 'react';
import styles from './TimerDurationController.module.scss';

interface TimerDurationControllerProps {}

const TimerDurationController: FC<TimerDurationControllerProps> = () => (
  <div className={styles.TimerDurationController}>
    TimerDurationController Component
  </div>
);

export default TimerDurationController;
