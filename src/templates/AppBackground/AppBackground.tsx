import React, { FC } from 'react';
import styles from './AppBackground.module.scss';
import { AppBackgroundProps } from './types';

export const AppBackground: FC<AppBackgroundProps> = ({ backgroundImage }) => {
    // todo заменить статическим изображением вместо ссылки
    const bgImage = backgroundImage ? backgroundImage : 'https://r4.wallpaperflare.com/wallpaper/786/670/384/night-artwork-futuristic-city-science-fiction-wallpaper-18d69d3800d09c5860ac51aed852a4fa.jpg'

    return (
        <div className={styles.appBackground}>
            <img
                className={styles.appBackgroundImage}
                data-src="images/cafe.jpg"
                src={bgImage}
                alt="Logo"
            />
       </div>
    );
};
