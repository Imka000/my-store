import React from 'react';
import styles from "./WatchCard.module.css";

const WatchCard = (props) => {
    return (
        <div className={styles.watchCard}>
            <img src={props.img_url}/>
            <div className={styles.watchName}>
                <h5>{props.name}</h5>
                <p>{props.pryce}</p>
                <p>{props.pryce_usd}</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </div>
    );
};

export default WatchCard;