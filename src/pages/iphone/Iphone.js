import React from 'react';
import styles from './Iphone.module.css'

const Iphone = () => {
    return (
        <>
            <h1>Айфоны</h1>
            <div className={styles.iphoneCard}>
                <a href="#">
                    <img src="https://istore.kg/media/products/iphone-14-pro-finish-select-202209-6-7inch-spaceblack_Qjv0Azl.webp"/>
                    <h5>Iphone 14 Pro Max</h5>
                </a>
                <p>от 128 760 сом</p>
                <p>от $1480,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.iphoneCard2}>
                <a href="#">
                    <img src="https://istore.kg/media/products/iphone-14-pro-storage-select-202209-6-1inch-deeppurple_66GX0Nb.webp"/>
                    <h5>Iphone 14 Pro</h5>
                </a>
                <p>от 113 970 сом</p>
                <p>от $1310,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.iphoneCard3}>
                <a href="#">
                    <img src="https://istore.kg/media/products/iphone-14-finish-select-202209-6-7inch-blue.webp"/>
                    <h5>Iphone 14 Plus</h5>
                </a>
                <p>от 86 130 сом</p>
                <p>от $990,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.iphoneCard4}>
                <a href="#">
                    <img src="https://istore.kg/media/products/iphone-14-finish-select-202209-6-1inch-purple_us2vliw.webp"/>
                    <h5>Iphone 14 Plus</h5>
                </a>
                <p>от 86 130 сом</p>
                <p>от $990,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </>
    );
};

export default Iphone;