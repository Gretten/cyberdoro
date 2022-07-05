import React, { FC } from 'react';
import styles from './AppContainer.module.scss';

interface AppContainerProps {}

export const AppContainer: FC<AppContainerProps> = () => (
  <div className={styles.AppContainer}>
    AppContainer Component
  </div>
);
