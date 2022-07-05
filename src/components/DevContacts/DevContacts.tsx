import React, { FC } from 'react';
import styles from './DevContacts.module.scss';

interface DevContactsProps {}

const DevContacts: FC<DevContactsProps> = () => (
  <div className={styles.DevContacts}>
    DevContacts Component
  </div>
);

export default DevContacts;
