import React, { FC } from 'react';
import styles from './SettingsToggler.module.scss';

interface SettingsTogglerProps {}

const SettingsToggler: FC<SettingsTogglerProps> = () => (
  <div className={styles.SettingsToggler}>
    SettingsToggler Component
  </div>
);

export default SettingsToggler;
