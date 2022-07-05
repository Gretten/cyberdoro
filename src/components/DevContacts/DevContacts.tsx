import React, { FC } from 'react';
import styles from './DevContacts.module.scss';

interface DevContactsProps {}

export const DevContacts: FC<DevContactsProps> = () => (
  <div className={styles.DevContacts}>
    DevContacts Component
  </div>
);
