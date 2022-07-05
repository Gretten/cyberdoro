import React, { FC } from 'react';
import styles from './SettingsPopup.module.scss';

interface SettingsPopupProps {}

export const SettingsPopup: FC<SettingsPopupProps> = () => (
  <div className={styles.SettingsPopup}>
    SettingsPopup Component
  </div>
);
