import React, { FC } from 'react';
import styles from './SettingsToggler.module.scss';

interface SettingsTogglerProps {}

export const SettingsToggler: FC<SettingsTogglerProps> = () => (
  <div className={styles.SettingsToggler}>
    SettingsToggler Component
  </div>
);
