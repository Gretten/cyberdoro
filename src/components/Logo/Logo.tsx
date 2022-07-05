import React, { FC } from 'react';
import styles from './Logo.module.scss';

interface LogoProps {}

export const Logo: FC<LogoProps> = () => (
  <div className={styles.Logo}>
    Logo Component
  </div>
);
