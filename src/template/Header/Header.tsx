import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    Header Component
  </div>
);
