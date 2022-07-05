import React, { FC } from 'react';
import styles from './SettingsButton.module.scss';

interface SettingsButtonProps {}

const SettingsButton: FC<SettingsButtonProps> = () => (
  <div className={styles.SettingsButton}>
    SettingsButton Component
  </div>
);

export default SettingsButton;
