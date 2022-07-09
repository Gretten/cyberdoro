import React, { FC, useState } from 'react';
import styles from './TimerStartButton.module.scss';
import { TimerStartButtonProps } from './types';

export const TimerStartButton: FC<TimerStartButtonProps> = ({ text, handleTimer }) => {

      const [isStarted, toggleIsStarted] = useState(false);

      const handler = () => {
            handleTimer();
            toggleIsStarted(!isStarted)
      }
      return (
          <button
              className={styles.timerStartButton}
              onClick={handler}
          >
                {isStarted ? 'start' : 'pause'}
          </button>
            );
}

