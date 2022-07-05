import React, { FC } from 'react';
import styles from './AppContainer.module.scss';

interface AppContainerProps {}

const AppContainer: FC<AppContainerProps> = () => (
  <div className={styles.AppContainer}>
    AppContainer Component
  </div>
);

export default AppContainer;
