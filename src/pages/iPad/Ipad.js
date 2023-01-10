import React from 'react';
import styles from "./Ipad.module.css";

const Ipad = () => {
    return (
        <>
            <h1>Айпады</h1>
            <div className={styles.ipadCard}>
                <a href="#">
                    <img src="https://istore.kg/media/products/ipad-pro-13-select-wifi-spacegray-202210.webp"/>
                    <h5>Ipad Pro 12.9" (2022)</h5>
                </a>
                <p>от 110 490 сом</p>
                <p>от $1270,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.ipadCard2}>
                <a href="#">
                    <img src="https://istore.kg/media/products/ipad-pro-11-select-wifi-silver-202210.webp"/>
                    <h5>Ipad Pro 11" (2022)</h5>
                </a>
                <p>от 80 040 сом</p>
                <p>от $920,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.ipadCard3}>
                <a href="#">
                    <img src="https://istore.kg/media/products/iPad-Pro-12-9-WiFi-Silver_TwRGhKz.webp"/>
                    <h5>Ipad Pro 12.9" (2021)</h5>
                </a>
                <p>от 91 350 сом</p>
                <p>от $1050,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.ipadCard4}>
                <a href="#">
                    <img src="https://istore.kg/media/products/ipad-air-select-wifi-spacegray-202203.webp"/>
                    <h5>Ipad Air 10.9" (2022)</h5>
                </a>
                <p>от 57 420 сом</p>
                <p>от $660,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </>
    );
};

export default Ipad;