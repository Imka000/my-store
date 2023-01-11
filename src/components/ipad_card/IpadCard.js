import React from 'react';
import styles from "./IpadCard.module.css";

const IpadCard = (props) => {
    return (
        <div className={styles.ipadCard}>
            <img src={props.img_ipad}/>
            <div className={styles.card_name}>
                <h5>{props.name_ipad}</h5>
                <p>{props.pryce}</p>
                <p>{props.pryce_usd}</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </div>
    );
};

export default IpadCard;