import React, { FC } from 'react';
import styles from './Main.module.scss';

interface MainProps {}

export const Main: FC<MainProps> = () => (
  <div className={styles.Main}>
    Main Component
  </div>
);
