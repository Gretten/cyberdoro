import React, { FC } from 'react';
import styles from './Logo.module.scss';
import { LogoProps } from './types';

/**
 * @param logoElSize Размер тега заголовка от h1 до h6
 */
export const Logo: FC<LogoProps> = ({ logoElSize, logoText }) => {

    const logoEl = React.createElement(
        `h${logoElSize}`,
        {className: 'sidebar'},
        logoText
    );

    return (
        <div className={styles.logoWrapper}>
            {logoEl}
        </div>
    );
};
