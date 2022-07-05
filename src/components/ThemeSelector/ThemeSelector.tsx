import React, { FC } from 'react';
import styles from './ThemeSelector.module.scss';

interface ThemeSelectorProps {}

const ThemeSelector: FC<ThemeSelectorProps> = () => (
  <div className={styles.ThemeSelector}>
    ThemeSelector Component
  </div>
);

export default ThemeSelector;
