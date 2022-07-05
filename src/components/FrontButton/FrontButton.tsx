import React, { FC } from 'react';
import styles from './FrontButton.module.scss';

interface FrontButtonProps {}

const FrontButton: FC<FrontButtonProps> = () => (
  <div className={styles.FrontButton}>
    FrontButton Component
  </div>
);

export default FrontButton;
