import React, { FC } from 'react';
import styles from './SettingsPopup.module.scss';

interface SettingsPopupProps {}

const SettingsPopup: FC<SettingsPopupProps> = () => (
  <div className={styles.SettingsPopup}>
    SettingsPopup Component
  </div>
);

export default SettingsPopup;
