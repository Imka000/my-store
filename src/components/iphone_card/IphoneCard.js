import React from 'react';
import styles from "./IphoneCard.module.css";

const IphoneCard = (props) => {
    return (
        <div className={styles.iphoneCard}>
            <img src={props.img_iphone}/>
            <div className={styles.cardName}>
                <h5>{props.name_card}</h5>
                <p>{props.pryce}</p>
                <p>{props.pryce_usd}</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </div>
    );
};

export default IphoneCard;