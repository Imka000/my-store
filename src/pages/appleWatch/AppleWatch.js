import React from 'react';
import styles from "./AppleWatch.module.css";

const AppleWatch = () => {
    return (
        <>
            <h1>Apple Watch</h1>
            <div className={styles.watchCard}>
                <a href="#">
                    <img src="https://istore.kg/media/products/MQEE3_VW_34FRwatch-49-titanium-ultra_VW_34FR_WF_COwatch-face-49-ocean-ultra_VW_vKKcX3M.webp"/>
                    <h5>Watch Ultra Titanium Case with Ocean Band</h5>
                </a>
                <p>от 76 125 сом</p>
                <p>от $875,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.watchCard2}>
                <a href="#">
                    <img src="https://istore.kg/media/products/MQEG3ref_VW_34FRwatch-49-titanium-ultra_VW_34FR_WF_COwatch-face-49-trail-ultra_CA7Sncd.webp"/>
                    <h5>Watch Ultra Titanium Case with Trail Loop</h5>
                </a>
                <p>от 76 125 сом</p>
                <p>от $875,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.watchCard3}>
                <a href="#">
                    <img src="https://istore.kg/media/products/MQDY3ref_VW_34FRwatch-49-titanium-ultra_VW_34FR_WF_COwatch-face-49-alpine-ultr_BiLg9B6.webp"/>
                    <h5>Watch Ultra Titanium Case with Alpine Loop</h5>
                </a>
                <p>от 76 125 сом</p>
                <p>от $875,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
            <div className={styles.watchCard4}>
                <a href="#">
                    <img src="https://istore.kg/media/products/ML753_VW_34FRwatch-41-stainless-silver-cell-8s_VW_34FR_WF_CO.webp"/>
                    <h5>Watch Series 8 with Stainless Steel Case</h5>
                </a>
                <p>от 91 350 сом</p>
                <p>от $1050,0</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </>
    );
};

export default AppleWatch;